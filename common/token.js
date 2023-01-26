const jwt = require("jsonwebtoken")

exports.generate = (payload) => {
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "8h"
    })
    return token
}