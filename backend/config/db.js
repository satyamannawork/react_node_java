require('dotenv').config({ path: '../.env' })
//console.log(require('dotenv').config({ path: '../.env' }))
const mongoose = require("mongoose");
//const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
//const URL = "mongodb://127.0.0.1:27017/myproject?retryWrites=true&w=majority" ;
const URL = process.env.MONGO_URI;
console.log("mongo url is " + URL)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("connection success form mongo")
    } catch (error) {
        console.error("Mongo connection error " + JSON.stringify(error))
        process.exit(1);
    }
}
module.exports = connectDB;