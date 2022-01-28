var checkStatus = function(req, res)
{
    var result = {};

    result.activo = true;
    result.mensaje = 'REST API Middleware OK!';
    res.json(result);
}

module.exports = {
    checkStatus
}
