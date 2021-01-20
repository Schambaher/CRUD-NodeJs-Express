const express = require('express');
const router=express.Router();

const contactoController = require('../controllers/contactoController');

router.get('/', contactoController.list);
router.post('/add', contactoController.save);
router.get('/delete/:id', contactoController.delete);

router.get('/update/:id', contactoController.edit);
router.post('/update/:id', contactoController.update);

module.exports = router;