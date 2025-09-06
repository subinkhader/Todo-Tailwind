const User = require("../models/users");
const bcrypt = require("bcrypt");

async function createAdminAccount() {
  try {
    const existingAdmin = await User.findOne({ email: "admin@test.com" });
    if (!existingAdmin) {
      const newAdmin = new User({
        email: "admin@test.com",
        name: "Admin",
        password: await bcrypt.hash("admin", 10),
        role: "admin",
      });
      await newAdmin.save();
      console.log("Admin account were created");
    } else {
      console.log("Admin already exist");
    }
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = createAdminAccount;
