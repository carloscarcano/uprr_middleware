var checkStatus = function(req, res)
{
    var result = {};

    result.activo = true;
    result.mensaje = 'REST API Middleware OK!';
    res.json(result);
}

var cargaDocumento = function(req, res)
{
    var mensaje = "datos cargados correctamente";
    var { nombre, apellidoPaterno, apellidoMaterno, grupo, materia, comunidad, coleccion } = req.body;
    
    if (esNulo(nombre) || esNulo(apellidoPaterno) || esNulo(apellidoMaterno) || esNulo(grupo) || esNulo(materia) || esNulo(comunidad) || esNulo(coleccion)) 
    {
        mensaje = 'faltan datos para poder realizar el proceso';
        res.json({ mensaje: mensaje });
        return false;
    }
}

function esNulo(variable)
{
    return variable == null;
}

module.exports = {
    checkStatus,
    cargaDocumento
}