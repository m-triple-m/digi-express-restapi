const mongoose = require('../connection');

const schema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    avatar: String
})


const model = mongoose.model('Users', schema);

module.exports = model;