const mongoose = require("mongoose");
const connectTODB = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then((conn)=>{
        console.log(`connected to DB ${conn.connection.host}`);
    })
    .catch((err)=>{
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = connectTODB;