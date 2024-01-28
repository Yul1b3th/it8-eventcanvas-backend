# 🚀 API
Este es el backend del proyecto que se encarga de gestionar los usuarios, ubicaciones, eventos y gráficos a través de una API RESTful. Utiliza Node.js, Express y Sequelize para interactuar con una base de datos MySQL.

## 📌 Instrucciones para Levantar el Servidor

Asegúrate de tener instalado Node.js y npm antes de seguir estos pasos.

**✔️ Paso 1:** Clonar el Repositorio

```bash
git clone https://url-del-repositorio.git
```

**✔️ Paso 2:** Ingresa al directorio del proyecto:
```bash
cd nombre-del-proyecto/backend 
```

**✔️ Paso 3:** Instalar las Dependencias
```bash
npm install
```

**✔️ Paso 4:** Configuración de la Base de Datos
Asegúrate de tener una base de datos MySQL en ejecución y configura las credenciales de acceso en el archivo _**db/connection.ts**_.

**✔️ Paso 4:** Levantar el Servidor
Abre dos consolas, una para compilar TypeScript y otra para ejecutar el servidor.

- Consola 1 (Compilar TypeScript - Manténla Abierta):
```bash
tsc --watch
```

- Consola 2 (Levantar el Servidor - En una Nueva Consola):
```bash
nodemon dist/app.js
```

El servidor estará disponible en http://localhost:8000 por defecto.

## 🚧 Endpoints de la API
### Usuarios
- **GET /api/usuarios**: Obtiene todos los usuarios.
- **GET /api/usuarios/:id**: Obtiene un usuario por ID.
- **POST /api/usuarios**: Crea un nuevo usuario.
- **PUT /api/usuarios/:id**: Actualiza un usuario existente.
- **DELETE /api/usuarios/:id**: Elimina un usuario.

**Nota:** Reemplaza **:id** con el ID del usuario correspondiente.

### Markers
- **GET /api/markers**: Obtiene todos los markers.
- **GET /api/markers/:id**: Obtiene un marker por ID.
- **POST /api/markers**: Crea un nuevo marker.
- **PUT /api/markers/:id**: Actualiza un marker existente.
- **DELETE /api/markers/:id**: Elimina un marker.

**Nota:** Reemplaza **:id** con el ID del marker correspondiente.

### Events
- **GET /api/events**: Obtiene todos los events.
- **GET /api/events/:id**: Obtiene un event por ID.
- **POST /api/events**: Crea un nuevo event.
- **PUT /api/events/:id**: Actualiza un event existente.
- **DELETE /api/events/:id**: Elimina un event.

**Nota:** Reemplaza **:id** con el ID del event correspondiente.

### Sales
- **GET /api/sales**: Obtiene todos los sales.
- **GET /api/sales/:id**: Obtiene un sale por ID.
- **POST /api/sales**: Crea un nuevo sale.
- **PUT /api/sales/:id**: Actualiza un sale existente.
- **DELETE /api/sales/:id**: Elimina un sale.

**Nota:** Reemplaza **:id** con el ID del sale correspondiente.


## 🤝 Contribuciones 

Si deseas colaborar en este proyecto o informar sobre problemas, no dudes en crear un "issue" o enviar un "pull request."