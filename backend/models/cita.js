const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const CitaSchema = new Schema({
    identification: {type: String, require: true},
    name: {type: String, require: true},
    especialidad: {type: String, require: true},
    especialista: {type: String, require: true},
    date: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Cita', CitaSchema);