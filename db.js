// db.js
const mongoose = require('mongoose');

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://MEG-user_1:Aa123456@meg.zetrnnk.mongodb.net/433', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

module.exports = mongoose;
