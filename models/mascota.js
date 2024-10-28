const { DataTypes } = require("sequelize");
const sequelize = require("../connection/connection");
const Duenio = require("./duenio");

const Mascota = sequelize.define('Mascota', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    especie: {
        type: DataTypes.STRING
    },
    raza: {
        type: DataTypes.STRING
    },
    genero: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false,
    tableName: 'mascotas'
});

Duenio.hasMany(Mascota, {
    foreignKey: 'id_duenio'
});
Mascota.belongsTo(Duenio, {
    foreignKey: {
        name: 'id_duenio',
        allowNull: false
    }
});

module.exports = Mascota;