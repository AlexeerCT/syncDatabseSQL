const express = require('express');
const { syncDataForClient } = require('../controllers/syncController');

const router = express.Router();

router.post('/sync/:clientId', async (req, res) => {
  const { clientId } = req.params;

  try {
    const result = await syncDataForClient(clientId);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: 'Error sincronizando datos para el cliente ' + clientId,
      error: error.message,
    });
  }
});

module.exports = router;
