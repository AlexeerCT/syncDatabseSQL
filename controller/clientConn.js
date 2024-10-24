// routes/clientConn.js
const express = require('express');
const router = express.Router();
const { sequelizeCentral } = require('../config/database');
const loadModels = require('../models/index');

// Obtener la lista de clientes
router.get('/', async (req, res) => {
  try {
    const Cliente = loadModels(sequelizeCentral).Cliente; // Cargar el modelo de cliente
    const clientes = await Cliente.findAll();

    return res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al obtener la lista de clientes:', error);
    return res.status(500).json({ error: 'Error al obtener la lista de clientes.' });
  }
});

module.exports = router;
