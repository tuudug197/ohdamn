const { User } = require("../models/user.model")
const bcrypt = require("bcrypt")
const { generate } = require("../common/token")

const salt = Math.floor(process.env.SALT) || 10

exports.signup = async (req, res) => {

    const { gmail, password } = req.body
    const hashed = await bcrypt.hash(password, salt)

    try {
        const document = new User({ gmail, password: hashed })
        await document.save()
        res.send(document)

    } catch (error) {

        return res.send(error)
    }
}

exports.login = async (req, res) => {

    const { gmail, password } = req.body

    const document = await User.findOne({ gmail })
    if (!document) return res.send("user not found!")

    try {

        const comparision = await bcrypt.compare(password, document.password)
        if (!comparision) return res.send("password is incorrect")  

        const token = generate({ gmail, password })
        return res.send(token)

    } catch (error) {
        return res.send("error in controller")
    }
}
