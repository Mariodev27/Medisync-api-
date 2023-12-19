# Medisync-api

Este es un proyecto básico de Node.js que utiliza Express, CORS, Morgan, HTTP y MySQL.

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

```
npm start
```

El servidor se iniciará en el puerto 3000.

## Estructura del proyecto

El proyecto tiene la siguiente estructura:

- `src/index.js`: Punto de entrada de la aplicación. Crea una instancia de la aplicación Express y configura el middleware y las rutas.
- `src/routes/routes.js`: Configura las rutas para la aplicación.
- `src/controllers/userController.js`: Maneja las rutas de la aplicación.
- `package.json`: Archivo de configuración para npm. Enumera las dependencias y scripts para el proyecto.

## Dependencias

El proyecto utiliza las siguientes dependencias:

- `cors`: Para habilitar CORS en la aplicación.
- `express`: Para crear el servidor y manejar las rutas.
- `http`: Para hacer solicitudes HTTP.
- `morgan`: Para registrar las solicitudes HTTP.
- `mysql12`: Para interactuar con una base de datos MySQL.