const express = require('express');
const { sequelizeCentral } = require('./config/database');
const { replicateAllDatabases } = require('./controller/syncDB');
const bodyParser = require('body-parser');
const clientConn = require('./controller/clientConn');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/clientes', clientConn);

const startServer = async () => {
    try {
      await sequelizeCentral.authenticate();
      console.log('Conectado a la base de datos central.');
      
      // Sincroniza los modelos antes de llamar a replicateAllDatabases
      await sequelizeCentral.sync();
  
      // Inicia la replicación de bases de datos
      await replicateAllDatabases();
      
      app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
      });
    } catch (error) {
      console.error('Error al iniciar el servidor:', error);
    }
  };

startServer();
