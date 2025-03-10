const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/camp_app')

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const city = cities[random1000];
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '67ab85490bc1c01ce129d4dd',
            location: `${city.city}, ${city.state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price: price,
            geometry: {
                type: 'Point',
                coordinates: [city.longitude, city.latitude]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dtyc5nqsr/image/upload/v1739381505/Campapp/omqtiw8awziapmr9evxq.jpg',
                    filename: 'Campapp/omqtiw8awziapmr9evxq'
                },
                {
                    url: 'https://res.cloudinary.com/dtyc5nqsr/image/upload/v1739381505/Campapp/sjkbwhgwaovpqlhoqe6d.jpg',
                    filename: 'Campapp/sjkbwhgwaovpqlhoqe6d'
                }
            ]
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})