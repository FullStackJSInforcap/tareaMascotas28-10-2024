const { Router } = require('express');
const { findAllDueniosController } = require('../controllers/duenio');

const router = Router();

router.get('/', findAllDueniosController);

module.exports = router;