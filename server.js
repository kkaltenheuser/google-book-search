// dependencies
const express = require("express");
const path = require("path");

const app = express();

const mongoose = require("mongoose")

const routes = require("./routes")

const PORT = process.env.PORT || 3001;

