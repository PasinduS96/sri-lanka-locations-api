const mongoose = require('mongoose');

require('../models/District');
const Districts = mongoose.model('districts');

const getDistrictByName = async (req, res) => { 
    try {
        const district = "";
        if (req.body.language === "english") {
            district = await Districts.findOne({ name_en: req.params.name });
        } else if (req.body.language === "sinhala") {
            district = await Districts.findOne({ name_si: req.params.name });
        } else if (req.body.language === "tamil") {
            district = await Districts.findOne({ name_ta: req.params.name });
        }
        if (!district) {
            return res
               .status(404)
               .json({ error: "District not found! Invalid district name." });
        }
        res.json(district);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

const getDistrictById = async (req, res) => { 
    try {
        const district = await Districts.findById(req.params.id);
        if (!district) {
            return res
               .status(404)
               .json({ error: "District not found! Invalid district id." });
        }
        res.json(district);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

//Export controllers
module.exports = {
    getDistrictByName,
    getDistrictById,
};