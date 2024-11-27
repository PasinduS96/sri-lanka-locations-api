const mongoose = require('mongoose');



const ProvincesSchema = mongoose.Schema({
    id: {
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

mongoose.model('provinces', ProvincesSchema);