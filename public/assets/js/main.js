import { construirTabla } from "./controlDom.js";
import { findAllMascotasAxios, findByIdMascotaAxios, findByIdMascotaFetch, insertMascotaFetch } from "./solicitudes.js";

const datos = await findAllMascotasAxios();
construirTabla(datos.datos);

