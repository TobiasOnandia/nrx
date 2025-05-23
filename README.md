📊 Crypto Dashboard Builder

Este proyecto es una aplicación web moderna construida con Next.js que permite a los usuarios crear y personalizar sus propios dashboards interactivos para visualizar datos de criptomonedas. Los usuarios pueden añadir, mover, redimensionar y guardar widgets de forma persistente.
✨ Características Principales

    Creación y Edición de Dashboards: Crea nuevos dashboards y edita los existentes.

    Gestión de Widgets: Añade widgets predefinidos (gráficos de precios, métricas, tablas) a tu dashboard.

    Arrastrar y Soltar (Drag & Drop):

        Arrastra widgets desde una barra lateral al lienzo del dashboard.

        Mueve y redimensiona widgets dentro del dashboard utilizando una cuadrícula interactiva.

    Persistencia de Datos: Guarda el diseño y la configuración de tus dashboards y widgets en una base de datos.

    Autenticación de Usuario: Protege el acceso a los dashboards, asegurando que solo los usuarios autenticados puedan crear y gestionar sus propios paneles.

    Eliminación de Dashboards y Widgets: Funcionalidad para eliminar dashboards completos y widgets individuales.

    Validación de Datos: Uso de Zod para una validación robusta de los datos de entrada en el servidor.

🚀 Tecnologías Utilizadas

    Framework: Next.js 14 (App Router, Server Components, Client Components, Server Actions)

    Frontend: React

    Estilos: Tailwind CSS

    Gestión de Estado: Zustand

    Layout de Cuadrícula: react-grid-layout

    Gráficos: Chart.js (con react-chartjs-2)

    Base de Datos: PostgreSQL

    ORM: Prisma

    Validación de Esquemas: Zod

    Caching: Redis (con ioredis como cliente)

    Autenticación (JWT): Jose (JSON Object Signing and Encryption)

    Notificaciones Toast: Sonner

⚙️ Configuración y Ejecución Local

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.
Prerrequisitos

    Node.js (v18 o superior)

    npm o Yarn

    PostgreSQL (o la base de datos que uses con Prisma)

1. Clonar el Repositorio

git clone <URL_DEL_REPOSITORIO>
cd crypto-dashboard-builder

2. Instalar Dependencias

npm install

# o

yarn install

3. Configurar Variables de Entorno

Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
JWT_SECRET="TU_SECRETO_JWT_SEGURO_Y_LARGO"
AUTH_TOKEN_COOKIE_NAME="auth_token" # O el nombre de tu cookie de autenticación

Asegúrate de reemplazar los valores de DATABASE_URL y JWT_SECRET con los tuyos. JWT_SECRET debe ser una cadena de texto larga y aleatoria. 4. Configurar la Base de Datos con Prisma

Aplica las migraciones de Prisma para crear las tablas en tu base de datos:

npx prisma migrate dev --name init

Si realizas cambios en el schema.prisma, deberás ejecutar npx prisma migrate dev --name <nombre_de_tu_migracion> nuevamente. 5. Generar Cliente Prisma

npx prisma generate

6. Ejecutar la Aplicación

npm run dev

# o

yarn dev

La aplicación estará disponible en http://localhost:3000.
🚀 Uso de la Aplicación

    Registro/Inicio de Sesión: Navega a la página de autenticación para registrarte o iniciar sesión.

    Lista de Dashboards: Una vez autenticado, serás redirigido a la página de tus dashboards.

    Crear Nuevo Dashboard: Haz clic en el botón para crear un nuevo dashboard. Se te asignará un ID único y un lienzo vacío.

    Añadir Widgets: En la barra lateral izquierda, haz clic en los widgets disponibles para añadirlos a tu dashboard.

    Mover y Redimensionar: Arrastra los widgets para cambiar su posición y usa los manejadores de redimensionamiento para ajustar su tamaño.

    Guardar Cambios: Haz clic en el botón "Guardar Cambios" (ubicado en la esquina inferior derecha) para persistir el diseño de tu dashboard en la base de datos.

    Editar Dashboard Existente: Desde la lista de dashboards, puedes hacer clic en un dashboard existente para volver a su página de edición.

    Eliminar Dashboard: Desde la lista de dashboards, puedes eliminar un dashboard completo, lo cual también eliminará todos sus widgets asociados.

🗄️ Esquema de la Base de Datos (Prisma)

model User {
id String @id @default(uuid())
email String @unique
name String
password String
createAt DateTime @default(now())
updateAt DateTime @default(now())
dashboards Dashboard[]
widgets Widget[] // Instancias de widgets creadas por este usuario
}

model Widget { // Instancia de un widget creada por un usuario (ej. "Mi Gráfico BTC")
id String @id @default(uuid())
name String
userId String
config String // Configuración específica de esta instancia (JSON string)
layout String // Layout específico de esta instancia (JSON string)
templateId String? // FK a WidgetTemplates
createAt DateTime @default(now())
updateAt DateTime @default(now())
user User @relation(fields: [userId], references: [id])
dashboardWidgets DashboardWidget[]
widgetTemplate WidgetTemplates? @relation(fields: [templateId], references: [id], onDelete: Cascade, name: "WidgetTemplate")
}

model WidgetTemplates { // Tipos de widgets predefinidos (ej. "price-chart")
id String @id @default(uuid())
title String
description String
types String[] // Ej. ["price-chart"]
defaultConfig String // JSON string
defaultLayout String // JSON string
createAt DateTime @default(now())
widgets Widget[] @relation("WidgetTemplate")
}

model Dashboard {
id String @id @default(uuid())
name String
userId String
user User @relation(fields: [userId], references: [id])
createAt DateTime @default(now())
updateAt DateTime @default(now())
dashboardWidgets DashboardWidget[]
}

model DashboardWidget { // Enlace entre un Dashboard y una instancia de Widget
id String @id @default(uuid()) // ID de la instancia de DashboardWidget
dashboardId String
dashboard Dashboard @relation(fields: [dashboardId], references: [id], onDelete: Cascade) // ¡Importante: onDelete: Cascade!
widgetId String
widget Widget @relation(fields: [widgetId], references: [id])
x Int  
 y Int  
 w Int  
 h Int  
 instanceConfig Json? // Configuración específica de esta instancia en este dashboard
createAt DateTime @default(now())
updateAt DateTime @default(now())
@@unique([dashboardId, widgetId]) // Asegura que un widget solo aparece una vez por dashboard
}

🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un "issue" o envía un "pull request".
📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.
