const mongoose = require("mongoose");

const connectDB = async ()=>{
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect("mongodb+srv://Motor:tqYBKphbcxidC22O@cluster0.7whtdl1.mongodb.net/Note");
        console.log(`DataBase connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB