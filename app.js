const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const errroMiddleware = require("./middleware/error");
app.use(express.json()); // Use express.json() middleware to parse JSON data
app.use(cookieParser());
// Routes Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
//Middleware for error
app.use(errroMiddleware);
module.exports = app;