let express = require("express");
let app = express();

app.get("/api/:date", (req, res) => {
  const date = Number(req.params.date)
    ? new Date(+req.params.date)
    : new Date(req.params.date);
  res.status(200).json({
    unix: Date.parse(date),
    utc: date.toUTCString(),
  });
});

module.exports = app;
