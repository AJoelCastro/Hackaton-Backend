const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./database/connection');

// Inicializar la aplicación Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api', require('./routes'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Hackaton-Backend' });
});

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

// Puerto
const PORT = process.env.PORT || 5000;

// Sincronizar base de datos y luego iniciar servidor
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });