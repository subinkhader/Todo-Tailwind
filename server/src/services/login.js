const bcrypt = require("bcrypt");
const User = require("../models/users");
const { generateToken } = require("../utils/jwtUtils");

const login = async (email, password) => {
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw new Error("User not found");
    }
    const isPasswordVaild = bcrypt.compare(password, existingUser.password);
    if (!isPasswordVaild) {
      throw new Error("Incorrect password");
    }
    const token = generateToken(existingUser);
    return token;
  } catch (error) {
    console.log("Login error:", error.message);
    throw new Error("Invalid Credentials");
  }
};

module.exports = { login };
