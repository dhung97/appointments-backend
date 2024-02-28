const mongoose = require('mongoose');
require('dotenv').config();

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN);

        console.log('Database online...');

    } catch (error) {
        console.error(error);
        throw new Error('The connection to database has failed...');
    }
}

module.exports = {
    connect
}