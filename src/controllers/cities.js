const mongoose = require('mongoose');

require('../models/City');
const City = mongoose.model('city');

const getCityByName = async (req, res) => { 
    try {
        const city = "";
        if (req.body.language === "english") {
            city = await City.findOne({ name_en: req.params.name });
        } else if (req.body.language === "sinhala") {
            city = await City.findOne({ name_si: req.params.name });
        } else if (req.body.language === "tamil") {
            city = await City.findOne({ name_ta: req.params.name });
        }
        if (!city) {
            return res
               .status(404)
               .json({ error: "City not found! Invalid city name." });
        }
        res.json(city);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

const getCityById = async (req, res) => { 
    try {
        const city = await City.findById(req.params.id);
        if (!city) {
            return res
               .status(404)
               .json({ error: "City not found! Invalid city id." });
        }
        res.json(city);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

const addNewCity = async (req, res) => { 
    try {
        if (req.body.name_en) {
            const existingCity = await City.findOne({ name_en: req.body.name_en });
            if (existingCity) {
                return res
                   .status(400)
                   .json({ error: "City already exists! Please use a different name." });
            }
        } else {
            return res
               .status(400)
               .json({ error: "City english name is required." });
        }
        const newCity = new City(req.body);
        await newCity.save();
        res.json(newCity);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

const updateCity = async (req, res) => { 
    try {
        const city = await City.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!city) {
            return res
               .status(404)
               .json({ error: "City not found! Invalid city id." });
        }
        res.json(city);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

const deleteCity = async (req, res) => { 
    try {
        const city = await City.findByIdAndDelete(req.params.id);
        if (!city) {
            return res
               .status(404)
               .json({ error: "City not found! Invalid city id." });
        }
        res.json({ message: "City deleted successfully." });
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

module.exports = {
    getCityByName,
    getCityById,
    addNewCity,
    updateCity,
    deleteCity,
}