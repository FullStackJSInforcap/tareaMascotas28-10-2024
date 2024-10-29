const Duenio = require("../models/duenio");
const Mascota = require("../models/mascota")

const findAllMascotas = async () => {
    try {
        const mascotas = await Mascota.findAll({
            include: Duenio
        });
        return {
            msg: 'Las mascotas son',
            status: 200,
            datos: mascotas.map(mascota => mascota.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

const findByIdMascota = async (id) => {
    try {
        const mascota = await Mascota.findByPk(id, {
            include: Duenio
        });
        if (mascota) {
            return {
                msg: `Los datos  de la mascota con id ${id} son`,
                status: 200,
                datos: [mascota.toJSON()]
            }
        }
        return {
            msg: `La mascota con id ${id} no existe`,
            status: 204,
            datos: []
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

const createMascota = async (nombre, especie, raza, edad, genero, id_duenio) => {
    try {
        await Mascota.create({
            nombre, especie, raza, edad, genero, id_duenio
        });
        const mascotas = await Mascota.findAll({
            include: Duenio
        });
        return {
            msg: `La mascota con nombre ${nombre} se insertó correctamente`,
            status: 200,
            datos: mascotas.map(mascota => mascota.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

const updateMastcota = async (id, nombre, especie, raza, edad, genero, id_duenio) => {
    try {
        await Mascota.update({
            nombre, especie, raza, edad, genero, id_duenio
        }, {
            where: {
                id
            }
        });
        const mascotas = await Mascota.findAll({
            include: Duenio
        });
        return {
            msg: `La mascota con nombre ${nombre} se actualizó correctamente`,
            status: 200,
            datos: mascotas.map(mascota => mascota.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

const deleteByIdMascota = async (id) => {
    try {
        await Mascota.destroy({
            where: {
                id
            }
        });
        const mascotas = await Mascota.findAll({
            include: Duenio
        });
        return {
            msg: `La mascota con id ${id} se eliminó correctamente`,
            status: 200,
            datos: mascotas.map(mascota => mascota.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en servidor',
            status: 500,
            datos: []
        }
    }
}

module.exports = {
    findAllMascotas,
    findByIdMascota,
    createMascota,
    updateMastcota,
    deleteByIdMascota
}