const mongoose = require('mongoose');
require('dotenv/config');

const mongoConnect = function() {
    const mongoOptions = { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    };

    mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, mongoOptions);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('Connected to Mongo DB');
    }); 
}

module.exports = mongoConnect;