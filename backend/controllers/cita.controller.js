/**
 * Se coloca el controlador como un objeto y luego se exporta como
 * se requiere primero el modelo cita
 */

 const Cita = require('../models/cita');
 const citaCtrl = {};
 
 /**
  * DEFINO LOS MÉTODOS  */
 
 //Obtener todos loas citas
 citaCtrl.getCitas = async (req, res) => {
     const citas = await Cita.find();
     res.json(citas);   
}             

//obtner citas de una persona
citaCtrl.getCitasPersona = async (req, res) => {
    const citas = await Cita.find({'identification': req.params.identification});
    res.json(citas);
}
 
 // Crear citas
 
 citaCtrl.createCitas = async (req, res) => { 
    const cita = new Cita(req.body);
    await cita.save();    
    res.json({
        'status': 'Cita guardada'
    });
 }

 //Conseguir un única cita 
 citaCtrl.getUnicoCita = async (req, res) => {     
     const citaUnica = await Cita.findById(req.params.id); 
     res.json(citaUnico);
 }
 
 //Actualizar cita
 citaCtrl.editarCita = async (req, res) =>  {
     const { id } = req.params; 
     const emepleadoEdit = {  
         name: req.body.name,
         especialidad: req.body.especialidad,
         especialista: req.body.especialista,
         date: req.body.date
     };
     await Cita.findByIdAndUpdate(id, {$set: emepleadoEdit}, {new:  true}); 
     res.json({status: 'Cita Actualizada'});
 }

 // Eliminar Cita 
 citaCtrl.eliminarCita = async (req, res) => {
     await Cita.findByIdAndDelete(req.params.id);
     res.json({status: 'Cita Eliminada'});
 }
  
 //exporto el módulo
 module.exports = citaCtrl;
