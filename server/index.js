const express = require("express");
const app = express();
const PORT = 5000;
const dotenv = require("dotenv");
const connect = require("./config/connection");

dotenv.config();
connect();
const { readdirSync } = require("fs");

app.get("/", (req, res) => {
  res.send("This is the pic prism clone");
});

// app.use("/api",authRoute)
readdirSync("./routes").map((route) => {
  app.use("/api", require(`./routes/${route}`));
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
