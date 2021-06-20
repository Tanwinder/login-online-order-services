const mongoose = require('mongoose');

const { Schema, model } = mongoose;


const Sales = new Schema({});

module.exports = model('Sales', Sales);