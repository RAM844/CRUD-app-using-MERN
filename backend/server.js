

const app = require("./app");
const PORT = process.env.PORT;//note here i did not configured the env file then also i am able to access it is because of module.exports done in app.js which allows us to get all the file contents from the app.js file #TODO: 😲intresting note it down



app.listen(PORT,()=>{
    console.log("app is running in the http:localhost:"+PORT);
})
