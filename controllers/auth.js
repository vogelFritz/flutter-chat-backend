const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped() 
        });
    }

    res.json({
        ok: true,
        msg: 'Crear cuenta!!'
    });
}

module.exports = {
    crearUsuario
}