const { userModel } = require("../models/user.model")

exports.signup = ( req, res) => {
    const body = req.body
    const newUser = new userModel(body)
    res.send("signed up succesfuly")
}

exports.login = ( req, res) => {
    res.send("logged in succesfuly")
}
