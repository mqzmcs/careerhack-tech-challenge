// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

app.get("/phones", (req, res) => {
    res.sendFile(__dirname + "/data/phones.json");
  });

app.get("/phones/:id", (req, res) => {
  const phoneId = req.params.id;
  const phonesData = require('./data/phones.json');

  const phone = phonesData.find(phone => phone.id === parseInt(phoneId));

  if (!phone) {
    res.status(404).send('Phone not found');
  } else {
    res.json(phone);
  }
});



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
