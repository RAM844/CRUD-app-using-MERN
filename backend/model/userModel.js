//Model: it is a design for storing data in structure in mongodb

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
       type:String,
       required:[true, 'name is required'],
       trim:true,
        maxLength:[26,'name must be less then 26 characters']
    },
    email:{
        type:String,
        required:[true,'email is compulsary'],
        unique:true,
    }
})

module.exports = mongoose.model("User",userSchema);