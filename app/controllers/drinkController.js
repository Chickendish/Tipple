//get express
var express = require("express");
//get router
var router = express.Router();
// Import the model (cat.js) to use its database functions.
var Drinks = require("../models/drink.js");
// get module
var db = require("../models");