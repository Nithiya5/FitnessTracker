const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: 'dlsfdnt5m',
    api_key: '155649525428376',
    api_secret: 'TBRNN-q-xHyiVG4B6gkPqeRWW3o'
});

module.exports = cloudinary;
