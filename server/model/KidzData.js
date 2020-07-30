const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/KidzDb')
const Schema = mongoose.Schema;

var kidzSchema = new Schema({
    numberId : Number ,
    numberImageUrl : String,
    numberWords: String,
    imageUrl : String
});

var Kidzdata = mongoose.model('numbers', kidzSchema);

module.exports = Kidzdata