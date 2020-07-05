const express = require('express');
const router = express.Router();
const sucursalesController = require('../controller/sucursalesController')

router.get('/',sucursalesController.index);
router.get('/:id',sucursalesController.sucursales);



module.exports = router;