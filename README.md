
# Task BackEnd prueba tecnica

Este es un backend construido con Express.js que gestiona tareas. Ofrece endpoints para crear, leer, actualizar y eliminar tareas, y está integrado con una base de datos MongoDB. Además, incluye documentación generada con Swagger y pruebas automatizadas con Jest y Supertest.

## Tecnologías utilizadas

- **Node.js**
- **Express.js**
- **MongoDB** con Mongoose
- **Express Validator** para la validación
- **Swagger** para la documentación de la API
- **Jest** y **Supertest** para las pruebas
- **Render** para el despliegue

## URL de la aplicación desplegada

La aplicación está desplegada en Render:  
[https://pt-task-backend.onrender.com](https://pt-task-backend.onrender.com)

⚠ **Nota importante:**  
Como es un despliegue gratuito en Render, la primera vez que accedas o después de un período de inactividad, el servidor puede tardar algunos segundos en arrancar. Esto es completamente normal debido a las políticas de servicios gratuitos.

La documentación completa de los endpoints está disponible en:  
[https://pt-task-backend.onrender.com/docs](https://pt-task-backend.onrender.com/docs)

## Endpoints principales

| Método | Endpoint                                           | Descripción                                        |
|--------|----------------------------------------------------|----------------------------------------------------|
| POST   | `/task`                                            | Crea una tarea. Recibe `title` y `description`.   |
| GET    | `/task`                                            | Obtiene todas las tareas. Permite filtrar por estado completado (`completed=true` o `completed=false`). |
| GET    | `/task/:id`                                        | Obtiene una tarea por su `id`.                    |
| PUT    | `/task/:id`                                        | Edita una tarea por su `id`.                      |
| DELETE | `/task/:id`                                        | Elimina una tarea por su `id`.                    |
| GET    | `/docs`                                            | Documentación de la API generada con Swagger.     |

Ejemplo de URL en producción:  
- Crear tarea: `POST https://pt-task-backend.onrender.com/task`  
- Filtrar tareas completadas: `GET https://pt-task-backend.onrender.com/task?completed=true`  
- Documentación Swagger: [https://pt-task-backend.onrender.com/docs](https://pt-task-backend.onrender.com/docs)

## Configuración inicial

### Requisitos previos

- Node.js 16 o superior
- npm 8 o superior

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega la siguiente variable:  

env
URL=mongodb+srv://crepzonplay:<db_password>@cluster0.79n9x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

Reemplaza `<db_password>` con la contraseña de tu base de datos.
### Instalación

1. Clona este repositorio:
    `git clone <repo-url> cd <repo-name>`
    
2. Instala las dependencias:
    `npm install`
    
3. Inicia el servidor:
    `npm start`
    

El servidor estará disponible en `http://localhost:3000` o en el puerto configurado en las variables de entorno.

### Pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

`npm test`

Las pruebas incluyen validaciones de rutas utilizando **Jest** y **Supertest**.

## Despliegue

El backend está desplegado en Render:  
[https://pt-task-backend.onrender.com](https://pt-task-backend.onrender.com)

⚠ **Nota importante:**  
El despliegue gratuito en Render tiene un tiempo de arranque más lento cuando se accede por primera vez o después de un período de inactividad. Por favor, sé paciente mientras el servidor arranca.

---

¡Gracias por usar este backend! Si tienes dudas o sugerencias, no dudes en contactarme.

FrontEnd de este proyecto : https://github.com/crtobias/PT-Task-Frontend
