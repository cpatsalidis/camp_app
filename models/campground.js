const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema maps to a MongoDB collection 
// and defines the shape of the documents 
// within that collection.
// By default, Mongoose adds an _id property
const CampgroundSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: String,
    description: String,
    location: {
        type: String,
        required: true
    },
});

// Convert our CampgroundSchema
// into a Model we can work with. 
// Then we export it so we can require 
// it in app.js/idnex.js
module.exports = mongoose.model('Campground', CampgroundSchema);

