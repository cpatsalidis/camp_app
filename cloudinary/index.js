const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Campapp',
        allowedFormats: ['jpeg', 'png', 'jpg'],
        transformation: [{ width: 600, height: 400, crop: 'fill' }]
    }
});

module.exports = {
    cloudinary,
    storage
}