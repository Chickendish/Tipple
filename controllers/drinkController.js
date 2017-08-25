var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var Drinks = require("../models/drink.js");

var db = require("../models");