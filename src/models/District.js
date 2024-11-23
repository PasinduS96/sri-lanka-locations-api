const mongoose = require('mongoose');

const DistrictsSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    province_id: {
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
    }
})

mongoose.model('districts', DistrictsSchema);