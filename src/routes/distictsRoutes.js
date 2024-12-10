const express = require('express');
const router = express.Router();

// Import controllers
const { getDistrictById, getDistrictByName } = require('../controllers/districts')

router.get('/getDistrictByName/:name', getDistrictByName);
router.get('/getDistrictById/:id', getDistrictById);

module.exports = router;
