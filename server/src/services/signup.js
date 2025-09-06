const user = require("../models/users");
const bcrypt = require("bcrypt");

const createUser = async (userData) => {
  const { name, email, password } = userData;
  const hashedPasswod = await bcrypt.hash(password, 10);
  const createUser = new user({
    name,
    email,
    password: hashedPasswod,
    role: "customer",
  });
  const savedUser = await createUser.save();
  return savedUser;
};

module.exports = { createUser };
