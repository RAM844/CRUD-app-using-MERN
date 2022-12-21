require("dotenv").config();
const express = require("express");
const app = express();
const connectTODB = require("./config/db")
const userRouter = require("./routes/userRoutes");

//middleWare
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//connect to db
connectTODB();

app.use("/",userRouter );





module.exports = app;//note TODO:
