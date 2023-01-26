const express = require("express")
const cors = require("cors")
require("dotenv").config()

const { mainrouter } = require("./routes/main.routes")
const { getDatabase } = require("./common/connect")

const port = process.env.PORT || 8000

const app = express()

getDatabase()

app.use(cors())
app.use(express.json()) 

app.use(mainrouter)

app.listen(port, () => {
    console.log("app is listening on port:", port)
})
