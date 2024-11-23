const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    district_id: {
        type: Number,
        required: true
    },
    name_en: {
        type: String,
        required: true
    },
    name_si: {
        type: String,
        required: false
    },
    name_ta: {
        type: String,
        required: false
    },
    postcode: {
        type: String,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    },
    longitude: {
        type: Number,
        required: false
    }
})

mongoose.model('city', CitySchema);