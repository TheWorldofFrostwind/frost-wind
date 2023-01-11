const express = require("express");

const app = express();

app.use((req, res, next) => {
  /**
   * Will look for favicon as a second GET request if there is no favicon set up and added in the app so ignore that request
   */
  if (req.url === "/favicon.ico") {
    return;
  }
  console.log("First middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware");
  next();
});

app.use((req, res, next) => {
  res.send("Hello from express!");
});

module.exports = app;
