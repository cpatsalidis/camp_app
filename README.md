# Camp Web Application 🌍🗺️

A full-stack web application for listing, reviewing, and managing campgrounds. Built with Node.js, Express, MongoDB, EJS, and integrates Cloudinary for image hosting, Maptiler for maps, and Multer for file uploads.

## ✨ Features

- 🔐 User registration, login, logout (using Passport.js)
- 🏕️ Campground CRUD operations
- 📸 Image uploads with resizing via Cloudinary
- 📝 Review system with validation
- ⚠️ Custom error handling and async error catching
- 🛡️ Middleware for authentication and authorization
- 📦 Seed script to populate initial data

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** EJS templating engine
- **Database:** MongoDB (with Mongoose)
- **Auth:** Passport.js (local strategy)
- **File Uploads:** Multer, Cloudinary
- **Validation:** Joi schemas
- **Security:** Helmet, input sanitization
- **Deployment-ready:** Final commits prepped for production


## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB instance (local or remote)
- Cloudinary account

### Installation

bash:
git clone 
cd repo
npm install

### Create a .env file and add the following:

# 🌩️ Cloudinary configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name        # Your Cloudinary account's cloud name
CLOUDINARY_KEY=your_cloudinary_api_key       # API key for Cloudinary (used for authentication)
CLOUDINARY_SECRET=your_cloudinary_api_secret # API secret for secure interactions with Cloudinary

# 🗺️ MapTiler API key
MAPTILER_API_KEY=your_maptiler_api_key       # Used to render maps (e.g., campground locations)

# 🌐 MongoDB connection string
DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/dbname # MongoDB Atlas connection URL

# 🚪 Server port
PORT=xxxxx                                    # Port your Express app will run on (default is 3000)


### Run locally:

node app.js

### You can use the seed script to populate campgrounds with geometry data and test image uploads and CRUD routes.

### 📄 License

MIT
