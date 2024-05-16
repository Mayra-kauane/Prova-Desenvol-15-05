const express = require('express');
const router = express.Router();
const TimesController = require('./TimesController');


router.post('/times', TimesController.create);
router.get('/times', TimesController.getUsers);
router.put('/times/:id', TimesController.updateUser);
router.delete('/times/:id', TimesController.deleteUser);

module.exports = router;