const express = require('express');
const router = express.Router();
const PartidasController = require('./PartidasController');


router.post('/partidas', PartidasController.create);
router.get('/partidas', PartidasController.getUsers);
router.put('/partidas/:id', PartidasController.updateUser);
router.delete('/partidas/:id', PartidasController.deleteUser);

module.exports = router;