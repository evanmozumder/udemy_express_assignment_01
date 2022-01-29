const express = require("express");
const path = require("path");

const app = express();
const homeRoute = require("./routes/home");
const usersRoute = require("./routes/users");

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoute);
app.use(usersRoute);

app.listen(port, () => {
  console.log("server is running on port ", port);
});
