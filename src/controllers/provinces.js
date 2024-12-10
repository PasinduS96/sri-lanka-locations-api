const mongoose = require("mongoose");

require("../models/Provice");
const Provinces = mongoose.model("provinces");

const getProviceByName = async (req, res) => {
  try {
    const province = await Provinces.findOne({ name_en: req.params.name });
    if (!province) {
      return res
        .status(404)
        .json({ error: "Province not found! Invalid provice name." });
    }
    res.json(province);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getProvinceById = async (req, res) => {
  try {
    const province = await Provinces.findById(req.params.id);
    if (!province) {
      return res
        .status(404)
        .json({ error: "Province not found! Invalid province id." });
    }
    res.json(province);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//Export controllers
module.exports = {
    getProviceByName,
    getProvinceById,
};
