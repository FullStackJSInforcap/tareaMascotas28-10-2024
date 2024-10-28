const Duenio = require("../models/duenio");
const Mascota = require("../models/mascota");

const findAllDuenios = async () => {
    try {
        const duenios = await Duenio.findAll({
            include: Mascota
        });
        return {
            msg: 'Los duenios con sus mascotas son',
            status: 200,
            datos: duenios.map(duenio => duenio.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

module.exports = {
    findAllDuenios
}