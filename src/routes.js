const express = require('express');

const mainController = require('./mainController');

var router = express.Router();

router.get('/check', mainController.checkStatus);
router.post('/documento', mainController.cargaDocumento);

module.exports = router;
