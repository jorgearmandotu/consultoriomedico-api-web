/**
 * Vamos a crear rutas del servidor
 * creamos un módulo por eso utilizamos express
 * vamos a utilizar como nuestra rest api para 
 * enviar y recibir datos en formato json
 */
const express = require('express');
const citaCtrl = require('../controllers/cita.controller');
const router = express.Router();


router.get('/', citaCtrl.getEmpleados);
router.post('/', citaCtrl.createCitas);
router.get('/:id', citaCtrl.getUnicoCita);
router.put('/:id', citaCtrl.editarCita);
router.delete('/:id', citaCtrl.eliminarCita);

module.exports = router;

module.exports = router;
