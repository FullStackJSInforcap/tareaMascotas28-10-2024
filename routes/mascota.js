const { Router } = require('express');
const { findAllMascotaController, findByIdMascotaController, insertMascotaController, updateMascotaController, deleteByIdMascotaController } = require('../controllers/mascota');

const router = Router();

router.get('/', findAllMascotaController);

router.get('/:id', findByIdMascotaController);

router.post('/', insertMascotaController);

router.put('/', updateMascotaController);

router.delete('/:id', deleteByIdMascotaController);

module.exports = router;