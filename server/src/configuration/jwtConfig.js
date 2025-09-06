const crypto = require("crypto");

//Generate a random secret key

const SecretKey = crypto.randomBytes(32).toString("hex");

module.exports = { secretKey: SecretKey };
