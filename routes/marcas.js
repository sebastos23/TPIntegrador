const express = require('express');
const router = express.Router();
const marcasController = require('../controller/marcasController')

router.get('/',marcasController.index);
router.get('/:id',marcasController.marcas);

module.exports = router;