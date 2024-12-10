const mongoose = require('mongoose');


const CreatedBySchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})

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
    },
    is_custom_city: {
        type: Boolean,
        required: false,
        default: false
    },
    created_by: CreatedBySchema
})

mongoose.model('city', CitySchema);

module.exports = CitySchema;
