const express = require('express');
const router = express.Router();

// Import controllers
const { getProviceByName, getProvinceById } = require('../controllers/provinces')

router.get('/getProviceByName/:name', getProviceByName);
router.get('/getProvinceById/:id', getProvinceById);

module.exports = router;
