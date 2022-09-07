const Amadeus = require('amadeus');
const express = require('express');
require('dotenv').config();

let app = express();
const PORT = 3000;

let amadeus = new Amadeus();
app.listen(PORT, () => console.log('Listening on port ' + PORT));

app.get("/nearby-airports", (req, res) => {
  amadeus.referenceData.locations.airports.get({
    longitude: parseFloat(req.query.longitude),
    latitude: parseFloat(req.query.latitude)
  })
  .then((r) => res.send(r))
  .catch((err) => {
    res.status(500).send(err);
  });
});