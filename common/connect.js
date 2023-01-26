const mongoose = require("mongoose")

exports.getDatabase = async () => {
    try {
        await mongoose.connect("mongodb+srv://tuudug197:ganaa_05223@cluster0.iz53ppl.mongodb.net/?retryWrites=true&w=majority")
        console.log("Succesfuly connected to your Database.")
    } catch (error) {
        console.log(error, "couldn't connect to your database")
    }
}