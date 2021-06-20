require('dotenv').config({ path: '../.env' })
const express = require("express")
const connectDB = require("./config/db")
const app = express();
connectDB();
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log('server connected at ' + PORT));