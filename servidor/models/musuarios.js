import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    f_creacion:{type: Date, default: Date.now},
    activo: {type: Boolean, default: false},
    rol: {type: String, default: 'g'},
    documentoId: {type: String, required: [true, 'DocumentoId obligatorio']},
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    email: {type: String, required: [true, 'e-Mail obligatorio']},
    pasword: String,
    f_ult_modificacion:{type: Date, default: Date.now}
});

// Convertir a modelo
const Usuario = mongoose.model('Usuario', userSchema);
export default Usuario; 