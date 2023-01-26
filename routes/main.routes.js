const { Router } = require("express")
const { userActionValidator } = require("../common/midlewares/user.validate")
const { signup , login } = require("../controllers/main.controllers")
const routes = Router()

routes
    .post("/signup", userActionValidator, signup)
    .post("/login", login)

exports.mainrouter = routes