const express = require('express');

const mainController = require('./mainController');

var router = express.Router();

router.get('/check', mainController.checkStatus);

// tickets
/*
router.post('/ticket', ticketController.agregarTicket);
router.get('/ticket/:idTicket', ticketController.obtenerTicket);
router.patch('/ticket/:idTicket', ticketController.modificarTicket);
router.delete('/ticket/:idTicket', ticketController.eliminarTicket);
*/

module.exports = router;
