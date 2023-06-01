const dotenv = require('dotenv');
dotenv.config();

const db = {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};

module.exports = db;
