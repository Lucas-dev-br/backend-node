const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/sequelize');

const Agenda = sequelize.define('Agenda', {
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  celular: {
    type: DataTypes.NUMBER(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  rua: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  numero: {
    type: DataTypes.NUMBER(20),
    allowNull: false
  },
  bairro: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  cidade: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  cep: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  complemento: {
    type: DataTypes.STRING(100),
  },
  done: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Agenda;
