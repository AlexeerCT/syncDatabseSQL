const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDescargaCTM', {
    CONSECUTIVO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FACTRECIBO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FACTENVIO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NUMPARTE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CANTDESC: {
      type: DataTypes.DECIMAL(19,8),
      allowNull: true
    },
    UNIMED: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    VALORMN: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    VALORME: {
      type: DataTypes.DECIMAL(23,8),
      allowNull: true
    },
    FECHAENT: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NUMPARTEEXPO: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    LINEA: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SDescargaCTM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "DesRec_FKFactRecParte",
        fields: [
          { name: "FACTRECIBO" },
          { name: "NUMPARTE" },
        ]
      },
      {
        name: "DesRec_FKREPaLin",
        unique: true,
        fields: [
          { name: "FACTRECIBO" },
          { name: "FACTENVIO" },
          { name: "NUMPARTE" },
          { name: "LINEA" },
        ]
      },
      {
        name: "DesRec_PKConsecutivo",
        unique: true,
        fields: [
          { name: "CONSECUTIVO" },
        ]
      },
      {
        name: "FKFACENVPARTE",
        fields: [
          { name: "FACTENVIO" },
          { name: "NUMPARTE" },
        ]
      },
    ]
  });
};
