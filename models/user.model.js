const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    gmail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

exports.User = new model("users", userSchema)