const {home , about, createUser, getUsers } = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();


router.get("/",home)

router.get("/about", about)

router.post("/createUser", createUser);

router.get("/getUsers",getUsers)

module.exports = router

