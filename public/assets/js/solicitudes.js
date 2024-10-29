const findAllMascotasFetch = async () => {
    const respuesta = await fetch('http://localhost:3000/mascotas');
    const datos = await respuesta.json();
    return datos;
}

const findAllMascotasAxios = async () => {
    const respuesta = await axios.get('http://localhost:3000/mascotas');
    return respuesta.data;
}

const findByIdMascotaFetch = async (id) => {
    const respuesta = await fetch(`http://localhost:3000/mascotas/${id}`);
    const datos = await respuesta.json();
    return datos;
}

const findByIdMascotaAxios = async (id) => {
    const respuesta = await axios.get(`http://localhost:3000/mascotas/${id}`);
    return respuesta.data;
}

const insertMascotaFetch = async (nombre, especie, raza, edad, genero, id_duenio) => {
    const respuesta = await fetch(`http://localhost:3000/mascotas/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/Json'
        },
        body: JSON.stringify({
            nombre, especie, raza, edad, genero, id_duenio
        })
    });
    const datos = await respuesta.json();
    return datos;
}

const insertMascotaAxios = () => {

}

export{
    findAllMascotasFetch,
    findAllMascotasAxios,
    findByIdMascotaFetch,
    findByIdMascotaAxios,
    insertMascotaFetch,
    insertMascotaAxios
}