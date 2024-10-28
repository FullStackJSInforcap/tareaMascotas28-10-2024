const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");

const Duenio = sequelize.define('Duenio', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    rut: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'duenios'
});

module.exports = Duenio;