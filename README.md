Aquí tienes la descripción del proyecto formateada para un README de GitHub, lista para usar en un archivo Markdown:

---

# 📊 Creador de Paneles de Criptomonedas

El Creador de Paneles de Criptomonedas es una aplicación web moderna construida con **Next.js** que permite a los usuarios crear y personalizar paneles interactivos para visualizar datos de criptomonedas. Los usuarios pueden añadir, mover, redimensionar y guardar widgets de forma persistente y segura.

---

## ✨ Características Principales

* **Creación y Edición de Paneles**: Crea nuevos paneles y edita los existentes con facilidad.
* **Gestión de Widgets**: Añade widgets predefinidos como gráficos de precios, métricas y tablas.
* **Arrastrar y Soltar (Drag & Drop)**:
    * Arrastra widgets desde una barra lateral al lienzo del panel.
    * Mueve y redimensiona widgets usando una cuadrícula interactiva.
* **Persistencia de Datos**: El diseño y la configuración de paneles y widgets se guardan de forma segura en la base de datos.
* **Autenticación de Usuario**: Acceso protegido para que solo usuarios autenticados puedan crear y gestionar sus paneles.
* **Eliminación**: Permite borrar paneles completos o widgets individuales.
* **Validación de Datos**: Utiliza **Zod** para asegurar la integridad y robustez de los datos en el backend.

---

## 🚀 Tecnologías Utilizadas

* **Framework**: Next.js 14 (App Router, Server & Client Components, Server Actions)
* **Frontend**: React
* **Estilos**: Tailwind CSS
* **Gestión de Estado**: Zustand
* **Diseño de Cuadrícula**: `react-grid-layout`
* **Gráficos**: Chart.js con `react-chartjs-2`
* **Base de Datos**: PostgreSQL
* **ORM**: Prisma
* **Validación de Esquemas**: Zod
* **Almacenamiento en Caché**: Redis con `ioredis`
* **Autenticación (JWT)**: Jose (JSON Object Signing and Encryption)
* **Notificaciones**: Sonner

---

## ⚙️ Instalación y Ejecución Local

### Prerrequisitos

Antes de comenzar, asegúrate de tener lo siguiente instalado:

* Node.js v18+
* npm o Yarn
* PostgreSQL (u otra base de datos compatible con Prisma)

### Pasos

1.  **Clonar el Repositorio**:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd crypto-dashboard-builder
    ```

2.  **Instalar Dependencias**:
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Configurar Variables de Entorno**:
    Crea un archivo `.env` en la raíz del directorio con las siguientes variables:
    ```ini
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
    JWT_SECRET="tu_secreto_jwt_seguro_y_largo"
    AUTH_TOKEN_COOKIE_NAME="auth_token"
    ```

4.  **Migrar Base de Datos**:
    ```bash
    npx prisma migrate dev --name init
    ```

5.  **Generar Cliente Prisma**:
    ```bash
    npx prisma generate
    ```

6.  **Ejecutar la Aplicación**:
    ```bash
    npm run dev
    # o
    yarn dev
    ```
    Abre `http://localhost:3000` en tu navegador para acceder a la aplicación.

---

## 🚀 Uso de la Aplicación

1.  **Regístrate o Inicia Sesión**: Comienza autenticándote desde la página de autenticación.
2.  **Accede a tus Paneles**: Navega a tu lista de paneles.
3.  **Crea un Nuevo Panel**: Genera un nuevo panel con un lienzo vacío y un ID único.
4.  **Añade Widgets**: Incorpora widgets desde la barra lateral a tu panel.
5.  **Personaliza el Diseño**: Arrastra y redimensiona los widgets para personalizar la disposición de tu panel.
6.  **Guarda los Cambios**: Guarda los cambios para que tu diseño persista.
7.  **Gestiona Paneles**: Edita paneles existentes o elimina paneles y widgets individuales según sea necesario.

---

## 🗄️ Esquema de la Base de Datos (Prisma)

```prisma
model User {
  id String @id @default(uuid())
  email String @unique
  name String
  password String
  createAt DateTime @default(now())
  updateAt DateTime @default(now())
  dashboards Dashboard[]
  widgets Widget[]
}

model Widget {
  id String @id @default(uuid())
  name String
  userId String
  config String
  layout String
  templateId String?
  createAt DateTime @default(now())
  updateAt DateTime @default(now())
  user User @relation(fields: [userId], references: [id])
  dashboardWidgets DashboardWidget[]
  widgetTemplate WidgetTemplates? @relation(fields: [templateId], references: [id], onDelete: Cascade)
}

model WidgetTemplates {
  id String @id @default(uuid())
  title String
  description String
  types String[]
  defaultConfig String
  defaultLayout String
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

model DashboardWidget {
  id String @id @default(uuid())
  dashboardId String
  dashboard Dashboard @relation(fields: [dashboardId], references: [id], onDelete: Cascade)
  widgetId String
  widget Widget @relation(fields: [widgetId], references: [id])
  x Int
  y Int
  w Int
  h Int
  instanceConfig Json?
  createAt DateTime @default(now())
  updateAt DateTime @default(now())
  @@unique([dashboardId, widgetId])
}
```

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! No dudes en abrir un *issue* o enviar un *pull request*.

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
