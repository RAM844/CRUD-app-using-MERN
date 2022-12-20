const {home , about } = require("../controllers/userControllers");
const express = require("express");
const router = express.Router();


router.get("/",home)

router.get("/about", about)


module.exports = router

