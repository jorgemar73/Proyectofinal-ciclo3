import express from 'express';
const router = express.Router();

// importar el modelo nota
import Usuario from '../models/musuarios';


// Agregar una nota POST 
router.post('/newUsuario', async(req, res) => {
    const body = req.body;
    try {
        const userDB = await Usuario.create(body);
        res.status(200).json(userDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
}); 


// Get con parámetros
router.get('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const userDB = await Usuario.findOne({_id});
        res.json(userDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Get con todos los documentos
router.get('/usuario', async(req, res) => {
    try {
        const userDb = await Usuario.find();
        res.json(userDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});



// Delete eliminar una nota
router.delete('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const userDb = await Usuario.findByIdAndDelete({_id});
        if(!userDb){
            return res.status(404).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(userDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


// Put actualizar una nota
router.put('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const userDb = await Usuario.findByIdAndUpdate(
            _id,
            body,
            {new: true});
            res.json(userDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});




//Exportamos la configuración de express app
module.exports = router;