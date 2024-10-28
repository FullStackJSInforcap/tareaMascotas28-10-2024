const { findAllMascotas, findByIdMascota, createMascota, updateMastcota, deleteByIdMascota } = require("../service/mascota");

const findAllMascotaController = async (req, res) => {
    const datos = await findAllMascotas();
    res.json(datos);
}

const findByIdMascotaController = async (req, res) => {
    const id = req.params.id;
    const datos = await findByIdMascota(id);
    res.json(datos);
}

const insertMascotaController = async (req, res) => {
    const nombre = req.body.nombre;
    const especie = req.body.especie; 
    const raza = req.body.raza;
    const edad = req.body.edad; 
    const genero = req.body.genero; 
    const id_duenio = req.body.id_duenio;
    const datos = await createMascota(nombre, especie, raza, edad, genero, id_duenio);
    res.json(datos);
}

const updateMascotaController = async (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const especie = req.body.especie; 
    const raza = req.body.raza;
    const edad = req.body.edad; 
    const genero = req.body.genero; 
    const id_duenio = req.body.id_duenio;
    const datos = await updateMastcota(id, nombre, especie, raza, edad, genero, id_duenio);
    res.json(datos);
}

const deleteByIdMascotaController = async (req, res) => {
    const id = req.params.id;
    const datos = await deleteByIdMascota(id);
    res.json(datos);
}

module.exports = {
    findAllMascotaController,
    findByIdMascotaController,
    insertMascotaController,
    updateMascotaController,
    deleteByIdMascotaController
}