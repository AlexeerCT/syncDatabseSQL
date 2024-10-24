const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GAphisItemsChr', {
    CONSECUTIVOAPHIS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LINEAITEM: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ITEMID: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    NUMBERFROM: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    NUMBERTO: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    CATEGORYTYPE: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    CATEGORYCODE: {
      type: DataTypes.STRING(19),
      allowNull: true
    },
    COMMODITYQUA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    COMMODITYCHARQUA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DESCRIPCTION: {
      type: DataTypes.STRING(59),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'GAphisItemsChr',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GAic_ConsecAphisLinea",
        unique: true,
        fields: [
          { name: "CONSECUTIVOAPHIS" },
          { name: "LINEAITEM" },
        ]
      },
    ]
  });
};
