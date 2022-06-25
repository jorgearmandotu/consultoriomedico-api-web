const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const CitaSchema = new Schema({
    identification: {type: String, require: true},
    name: {type: String, require: true},
    telefono: {type: String, require: true},
    email: {type: String},
    especialidad: {type: String, require: true},
    especialista: {type: String, require: true},
    date: {type: String},
    hora: {type: String }
});
module.exports = mongoose.model('Cita', CitaSchema);