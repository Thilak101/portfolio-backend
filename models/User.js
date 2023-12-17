const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
        }
    },
    message: {
        type: String,

    }

}, {timestamps: true})

const User = mongoose.model("users", UserSchema)

module.exports = User