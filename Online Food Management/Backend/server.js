const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
//require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

//const URL = process.env.MONGODB_URL;

mongoose.connect("mongodb+srv://tharudhananjaya2222:Physics9900@foodordering.lv4bzdy.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");

});

const paymentRouter = require("./routes/payments.js");

app.use("/payment",paymentRouter);

app.listen(PORT, () => {
    console.log('Port number is ' + PORT);
});