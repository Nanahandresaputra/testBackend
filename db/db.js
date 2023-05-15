const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@backend-test.vgfjmbe.mongodb.net/?retryWrites=true&w=majority");
const db = mongoose.connection;
db.on("error", console.error.bind("connection error"));
db.once("open", () => console.log("database connected"));

module.exports = db;
