const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

app.get("/", (req, res) => {
  res.send("This is the pic prism clone");
});

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
