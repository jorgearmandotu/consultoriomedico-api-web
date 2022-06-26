/**
 * Vamos a crear rutas del servidor
 * creamos un módulo por eso utilizamos express
 */
const express = require('express');
const citaCtrl = require('../controllers/cita.controller');
const router = express.Router();


router.get('/', citaCtrl.getCitas);
router.get('/citas:identification', citaCtrl.getCitasPersona);
router.post('/', citaCtrl.createCitas);
router.get('/:id', citaCtrl.getUnicoCita);
router.put('/:id', citaCtrl.editarCita);
router.delete('/:id', citaCtrl.eliminarCita);

module.exports = router;

