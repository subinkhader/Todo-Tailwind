const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/jwt_db")
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
