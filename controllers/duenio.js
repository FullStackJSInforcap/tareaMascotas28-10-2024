const { findAllDuenios } = require("../service/duenio");

const findAllDueniosController = async (req, res) => {
    const datos = await findAllDuenios();
    res.json(datos);
}

module.exports = {
    findAllDueniosController
};