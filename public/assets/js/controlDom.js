import { findAllMascotasAxios, findAllMascotasFetch, findByIdMascotaAxios, findByIdMascotaFetch, insertMascotaFetch } from "./solicitudes.js";

const btnInicio = document.querySelector('#btnInicio');
const btnInsertar = document.querySelector('#btnInsertar');

const construirTabla = async (datos) => {
    const main = document.querySelector('main');
    main.innerHTML = `<div class="container mt-5">
            <form>
                <div class="mb-3">
                    <label for="txtIdMascota" class="form-label">Email address</label>
                    <input type="number" class="form-control" id="txtIdMascota">
                </div>
                <button type="button" class="btn btn-primary" id="btnBuscar">Buscar</button>
            </form>
        </div>

        <div class="container mt-5">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Mascota</th>
                        <th scope="col">Especie</th>
                        <th scope="col">Raza</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Rut</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                    </tr>
                </thead>
                <tbody id="cuerpoTabla">

                </tbody>
            </table>
        </div>`;
    const cuerpoTabla = document.querySelector('#cuerpoTabla');
    cuerpoTabla.innerHTML = '';
    datos.forEach(mascota => {
        cuerpoTabla.innerHTML += `<tr>
                    <td>${mascota.nombre}</td>
                    <td>${mascota.especie}</td>
                    <td>${mascota.raza}</td>
                    <td>${mascota.edad}</td>
                    <td>${mascota.Duenio.rut}</td>
                    <td>${mascota.Duenio.nombre}</td>
                    <td>${mascota.Duenio.apellido}</td>
                </tr>`;
    });
    const btnBuscar = document.querySelector('#btnBuscar');
    btnBuscar.addEventListener('click', async () => {
        const id = document.querySelector('#txtIdMascota').value;
        const datos = await findByIdMascotaAxios(id);
        construirTabla(datos.datos);
    });
}



btnInicio.addEventListener('click', async () => {
    console.log('Reconstruyendo tabla');
    const datos = await findAllMascotasAxios();
    construirTabla(datos.datos);
});

btnInsertar.addEventListener('click', () => {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML = `<div class="container mt-5">
        <form>
            <div class="mb-3">
                <label for="txtNombreMascota" class="form-label">Nombre Mascota</label>
                <input type="text" class="form-control" id="txtNombreMascota">
            </div>
            <div class="mb-3">
                <label for="txtEspecie" class="form-label">Especie</label>
                <input type="text" class="form-control" id="txtEspecie">
            </div>
            <div class="mb-3">
                <label for="txtRaza" class="form-label">Raza</label>
                <input type="text" class="form-control" id="txtRaza">
            </div>
            <div class="mb-3">
                <label for="txtEdad" class="form-label">Edad</label>
                <input type="text" class="form-control" id="txtEdad">
            </div>
            <div class="mb-3">
                <label for="txtGenero" class="form-label">Genero</label>
                <input type="text" class="form-control" id="txtGenero">
            </div>
            <div class="mb-3">
                <label for="txtIdDuenio" class="form-label">Id Dueño</label>
                <input type="text" class="form-control" id="txtIdDuenio">
            </div>
            <button type="button" class="btn btn-primary" id="btnCrear">Insertar</button>
        </form>
    </div>`;
    const btnCrear = document.querySelector('#btnCrear');
    btnCrear.addEventListener('click', async () => {
        const txtNombreMascota = document.querySelector('#txtNombreMascota').value;
        const txtEspecie = document.querySelector('#txtEspecie').value;
        const txtRaza = document.querySelector('#txtRaza').value;
        const txtEdad = document.querySelector('#txtEdad').value;
        const txtGenero = document.querySelector('#txtGenero').value;
        const txtIdDuenio = document.querySelector('#txtIdDuenio').value;
        const respuesta = await insertMascotaFetch(txtNombreMascota, txtEspecie, txtRaza, txtEdad, txtGenero, txtIdDuenio);
        construirTabla(respuesta.datos);
        
    });
});

export {
    construirTabla
}