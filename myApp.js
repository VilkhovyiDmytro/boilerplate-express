let express = require("express");
let app = express();

app.get("/api/:date?", (req, res) => {
  const d = req.params.date || Date.now();
  const date = new Date(+d ? +d : d);

  if (!date.getTime()) return res.json({ error: "Invalid Date" });

  res.json({
    unix: Date.parse(date),
    utc: date.toUTCString(),
  });
});

module.exports = app;
