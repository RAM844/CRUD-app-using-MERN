# Basic CRUD application using MERN(Mongodb, Express, React, Node)
This app is made while learning Express and routing concepts.

### What I learned?

 ![image](./backend%20folder%20structure.png)

 ```javascript
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('hello world')
})

app.get('/about', (req, res) => {
  res.send('about')
})

```

#### This can be divided into different folders so that it will be easy to understand for others and us also

1. make different folders
	1. routes
	2. controllers
	3. modules

```javascript
	this is in routers folder
	app.get('/', put all this in controller folders
	})
```

## 1. Routes
Routes file contains only the routes and controller are imported from the require and used in routes

```javascript
// routes folder contains all the routes
const express = require("express");
const router = express.Router();
const { home, createUser, editUser, deleteUser, getUser } = require("../controllers/userControllers");

router.get("/", home);
router.post("/createUser",createUser);
router.put("/editUser/:id",editUser);
router.delete("/deleteUser/:id",deleteUser);
router.get("/getUser",getUser);

module.exports = router;
```

## 2. controllers
controllers contain the main logic which needs to be executed can say
for example 
you can export in two ways 
way 1:

```javascript
const home = (req,res)=>{
	res.send("Hello buddy")};

module.exports = {home};
```
way 2:

```javascript
exports.home = (req,res)=>{
	res.send("Hello buddy")};
```

importing can be done in this way(used in many js files):

```javascript
const { home, createUser, editUser, deleteUser, getUser } = require("../controllers/userControllers");
```

Everything in place will look like this one below

```javascript
const { findOne, db } = require("../models/userModels");
const User = require("../models/userModels");

exports.home = (req,res)=>{
		res.send("Hello buddy")};

exports.createUser = async (req,res)=>{
			//body of the controller or 
			//can say logic should be here
};
```

## 3. models
models contains the schema of the database and we use ==mongoose== to write schema our case

```javascript
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
name:{
	type:String,
	require: [true, "name is required..."],
	trim:true,
	maxLength:[26,"name must be under 26 letters"]
	},

email:{
	type:String,
	require:[true,"email is must"],
	unique:true
	}
})

module.exports = mongoose.model("user",userSchema)
```

