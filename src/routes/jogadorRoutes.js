const express = require('express');
const router = express.Router();
const JogadorController = require('./JogadorController');


router.post('/jogadores', JogadorController.create);
router.get('/jogadores', JogadorController.getUser);
router.put('/jogadores/:id', JogadorController.updateUser);
router.delete('/jogadores/:id', JogadorController.deleteUser);

module.exports = router;