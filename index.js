require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const Router = require("./Routes/Router");
const requestIp = require("request-ip");

app.use(requestIp.mw());

app.use(Router);
app.use(require("cors"));
app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running");
});
