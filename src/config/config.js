require('dotenv').config();

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST, // Actualiza esta línea con la dirección del host de tu base de datos RDS
  user: process.env.DB_USER, // Actualiza esta línea con el nombre de usuario de tu base de datos RDS
  password: process.env.DB_PASSWORD, // Actualiza esta línea con la contraseña de tu base de datos RDS
  database: process.env.DB_NAME, // Actualiza esta línea con el nombre de tu base de datos RDS
  port: process.env.DB_PORT, // Asegúrate de agregar el puerto correcto para tu base de datos RDS
});

pool.promise().query('SELECT 1')
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.error('Error al conectar a la base de datos', err));

module.exports = pool;