const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const URI = process.env.DATABASE_URL;
async function connect() {
    try {
        await mongoose.connect(URI || 'mongodb://localhost:27017/dbfurniture');
        console.log("Connect Successfully !!!!!");
    }
    catch(e){
        console.log("Connect fails !!!");
    }
}

module.exports = {connect};