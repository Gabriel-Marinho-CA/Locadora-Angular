// require('dotenv').config();

// const dbUser = process.env.DB_USER;
// const dbPassword = process.env.DB_PASSWORD;

const mongoose = require('mongoose');

async function startDB() {
    // await mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.es8furw.mongodb.net/test`);
    await mongoose.connect('mongodb+srv://admin:admin@locadora.ku0tzps.mongodb.net/');
}

module.exports = startDB;