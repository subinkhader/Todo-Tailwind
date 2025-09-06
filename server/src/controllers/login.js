const authService = require("../services/login");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token: token });
  } catch (error) {
    res.status(401).json({ message: "Invalid credential" });
  }
};

module.exports = { login };
