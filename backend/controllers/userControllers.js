const User = require("../model/userModel");

exports.home = (req, res)=>{
    res.send("hello people this is home");
}
exports.about = (req, res)=>{
    res.send("hello this is about us page");
};

exports.createUser = async (req,res)=>{
    try {
        const {name,email }= req.body;
        if(!name || !email){
            throw new Error("name and email both are required");
        }
        const userExists = await User.findOne({email});
        if(userExists){
            throw new Error(" email already exists");
        }
        const user = await User.create({name,email})
        res.status(201).json({
            success:true,
            message:"user created succesfully",
            user
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message : error.message
        })
    }
}

exports.updateUser = async (req,res)=>{
    
}


exports.getUsers = async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json({
            success:true,
            users
        })
    } catch (error) {
        console.log(error);
        res.status(401).json({
            success:false,
            message : error.message
        })
    }
}

// module.exports = { home, about};
