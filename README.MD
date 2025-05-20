2. Flujo de Trabajo Completo del Dashboard

Ahora, veamos el flujo de trabajo desde que el usuario crea un dashboard hasta que lo edita, y cómo se integrarían los widgets y los datos.
B. Flujo de Trabajo Detallado

    Usuario Edita un Dashboard Existente (o recién creado)
        Carga Inicial de Datos (Server Component):
            Cuando el usuario visita /dashboard/edit/[dashboardId], el Server Component de esa página (ej. app/dashboard/edit/[dashboardId]/page.tsx) es responsable de cargar todos los DashboardWidget asociados a ese dashboardId desde la base de datos.
            Llamada al backend (ej. getDashboardWidgets(dashboardId: string) que sería otra Server Action o una función de DB).
            Estos widgets cargados se pasan como prop inicial al componente DashboardCustomizerPage (que ahora es un Client Component).
        Client Component (DashboardCustomizerPage):
            Recibe los widgets iniciales como props.
            Inicializa el store de Zustand (useCoinMarketStore) con estos widgets cargados.
            Renderiza WidgetsSidebar y DashboardCanvas.

    Usuario Añade un Widget desde la Sidebar
        UI: El usuario hace clic en un widget en WidgetsSidebar.
        Frontend (Client Component):
            WidgetsSidebar llama a onAddWidget(widgetTypeId).
            DashboardCustomizerPage (o directamente WidgetsSidebar si lo refactorizas) genera un id único para el nuevo widget.
            Calcula las propiedades iniciales (x, y, w, h) del nuevo widget en unidades de cuadrícula (como lo hicimos en el código).
            Frontend (Zustand Store): Llama a la acción addWidget del store, añadiendo el nuevo widget al estado local (widgets). Esto actualiza DashboardCanvas inmediatamente.
            Backend (Server Action): Llama a la Server Action addDashboardWidget (definida al principio) para persistir este nuevo widget en la base de datos. Le pasas el dashboardId actual y los datos del nuevo widget.

    Usuario Mueve/Redimensiona un Widget
        UI: El usuario arrastra o redimensiona un widget en DashboardCanvas (gestionado por react-grid-layout).
        Frontend (DashboardCanvas):
            react-grid-layout emite el evento onLayoutChange con el nuevo layout de todos los widgets.
            DashboardCanvas llama a su prop onLayoutChange.
        Frontend (Zustand Store): DashboardCustomizerPage recibe este newLayout y llama a la acción updateWidgetsLayout del store de Zustand para actualizar el estado local. Esto asegura que la UI esté sincronizada.
        Backend (Server Action): Para cada widget que haya cambiado su posición/tamaño, o idealmente, una Server Action que reciba el layout completo o una lista de cambios (más eficiente para múltiples movimientos):
            Llamas a updateDashboardWidgetPosition(widgetId, newX, newY, newW, newH).
            O, una acción updateMultipleWidgetPositions(updates: { id: string, x: number, y: number, w: number, h: number }[]) para batchar las actualizaciones.

    Usuario Guarda Cambios / Salida
        UI: El usuario navega fuera o hace clic en un botón "Guardar".
        Backend (Server Action): No necesitas un botón de "Guardar" explícito si actualizas en tiempo real. Cada vez que onLayoutChange se dispara (o addWidget se llama), la Server Action ya persiste el cambio. Esto proporciona una experiencia de guardado automático.

C. Manejo de config del Widget

Cada widget puede tener configuraciones únicas (ej. un widget de gráfico de precio necesita saber qué símbolo y qué período de tiempo mostrar).

    En la UI: Cuando el usuario añade un widget (o lo edita), podrías abrir un modal o un panel lateral para que configure el widget.
    En el DashboardWidget objeto: El config sería un objeto JavaScript (ej. { symbol: "ETH", timeframe: "1d" }).
    Al guardar en DB: Antes de enviar a la Server Action, usa JSON.stringify(config) para convertir el objeto en un string.
    Al cargar desde DB: Después de obtenerlo de la DB, usa JSON.parse(config) para convertir el string de vuelta a un objeto JavaScript.
    Zustand: El store de Zustand mantendría el objeto config directamente, para que sea fácil de usar en tus componentes de React.
