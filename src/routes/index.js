const express = require('express');
const router = express.Router();

// Importar rutas específicas
// const userRoutes = require('./user.routes');

// Definir rutas
// router.use('/users', userRoutes);

// Ruta de prueba para la API
router.get('/', (req, res) => {
  res.json({ message: 'API funcionando correctamente' });
});

module.exports = router;