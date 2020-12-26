const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
const axios = require("axios");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


const order = require("./routers/orderDetails");
app.use("/orderDetails", order);

const home = require("./routers/home");
app.use("/home", home);

const login = require("./routers/login");
app.use("/", login);

const bill = require("./routers/bill");
app.use("/billing", bill);


const categories = require("./routers/categories");
app.use("/categories", categories);


const staff = require("./routers/staff");
app.use("/staff", staff);


const waitinglist = require("./routers/waitinglist");
app.use("/waitinglist", waitinglist);


const pendingorder = require("./routers/chef/pendingorder");
app.use("/pendingorder", pendingorder);


const ongoingorder = require("./routers/chef/ongoingorder");
app.use("/ongoingorder", ongoingorder);


const edititem = require("./routers/edititem");
app.use("/edititems", edititem);

const addcategory = require("./routers/addcategory.js");
app.use("/addcategory", addcategory);


const addstaff = require("./routers/addstaff.js");
app.use("/addstaff", addstaff);


const deleteitem = require("./routers/deleteitem.js");
app.use("/deleteitems", deleteitem);

const additems = require("./routers/additems.js");
app.use("/additems", additems);


const editcategory = require("./routers/editcategory.js");
app.use("/editcategory", editcategory);

const deletecategory = require("./routers/deletecategory.js");
app.use("/deletecategory", deletecategory);


app.listen(3000, function () {
  console.log("Server started on port 3000");
});

