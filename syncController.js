const { loadClientModels } = require('../loadModels');
const { localModels } = require('../loadLocalModels'); // Modelos de la base de datos local

const syncDataForClient = async (clientId) => {
  try {
    // Cargar los modelos del cliente
    const clientModels = await loadClientModels(clientId);

    // Suponiendo que deseas sincronizar una tabla específica, como "Productos"
    const localData = await localModels.Product.findAll();
    const clientData = await clientModels.Product.findAll();

    const dataToInsert = [];
    const dataToUpdate = [];

    localData.forEach(localRecord => {
      const clientRecord = clientData.find(c => c.id === localRecord.id);

      if (clientRecord) {
        if (clientRecord.updatedAt !== localRecord.updatedAt) {
          dataToUpdate.push(localRecord);
        }
      } else {
        dataToInsert.push(localRecord);
      }
    });

    // Insertar nuevos datos en la base de datos del cliente
    if (dataToInsert.length > 0) {
      await clientModels.Product.bulkCreate(dataToInsert);
    }

    // Actualizar datos en la base de datos del cliente
    if (dataToUpdate.length > 0) {
      for (const updatedRecord of dataToUpdate) {
        await clientModels.Product.update(updatedRecord.toJSON(), {
          where: { id: updatedRecord.id }
        });
      }
    }

    return { message: 'Sincronización completada para el cliente ' + clientId };
  } catch (error) {
    console.error('Error en la sincronización para el cliente:', error);
    throw error;
  }
};

module.exports = { syncDataForClient };
