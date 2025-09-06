const express = require("express");
const signupRoute = require("./routes/signup");
const login = require("./routes/login");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const createAdminAccount = require("./scripts/admin");

app.use(cors());
app.use(bodyParser.json());
createAdminAccount();

app.use("/user", signupRoute);
app.use("/auth", login);

app.listen(3001, () => {
  console.log("Server is running");
});
