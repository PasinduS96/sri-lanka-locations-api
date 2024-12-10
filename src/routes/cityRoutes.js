const express = require('express');
const router = express.Router();

// Import controllers
const { getCityByName, getCityById, addNewCity, deleteCity, updateCity } = require('../controllers/cities')

router.post('/getCityByName/:name', getCityByName);
router.get('/getCityById/:id', getCityById);
router.get('/addNewCity', addNewCity);
router.get('/deleteCity/:id', deleteCity);
router.get('/updateCity/:id', updateCity);

module.exports = router;
