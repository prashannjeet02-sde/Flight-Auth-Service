const express = require("express");
const app = express();

const { PORT } = require("./config/server.config");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// Server
app.listen(PORT, () => {
  console.log(`Auth-Server Listening to Port:${PORT}`);
});
