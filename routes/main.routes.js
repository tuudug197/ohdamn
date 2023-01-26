const { Router } = require("express")
const { signup , login } = require("../controllers/main.controllers")
const routes = Router()

routes
    .post("/signup",  signup)
    .get("/login", login)

exports.mainrouter = routes