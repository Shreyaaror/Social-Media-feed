const mongoose = require("mongoose")

 async function connectDB() {
    await mongoose.connect("mongodb+srv://backend:shreya123@backent-prac.euun0ow.mongodb.net/project-1")
    console.log("connected to database")
}
module.exports = connectDB;