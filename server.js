  
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(helmet());
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`PORT ${PORT}`);
});