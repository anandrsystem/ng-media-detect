const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '')));

app.get("/", function (req, res) {
  res.sendFile("./index.html");
});

// Start Server
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server started on port ${server.address().port}`);
});
