const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/admin", (req, res) => {
  res.send("Hello, Admin Server!");
});

app.listen(port, () => {
  console.log(`Admin-server running at http://localhost:${port}`);
});
