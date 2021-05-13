const mongoose = require('mongoose')
const Schema = mongoose.Schema  //capital letter in starting of word means it is a class or constructor function

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'customer' }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
