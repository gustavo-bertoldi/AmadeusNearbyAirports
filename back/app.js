const Amadeus = require('amadeus');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const NearbyAirports = require('./nearby_airports');

let app = express();
const PORT = 3000;

let amadeus = new Amadeus();
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let nearbyAirports = new NearbyAirports(amadeus); 

app.get("/nearby-airports", (req, res) => {
    nearbyAirports.get(req.query.lat, req.query.lon, req.query.ipp)
      .then(r => res.send(r))
      .catch(err => res.status(500).send(err));
});

app.get("/nearby-airports-next", (req, res) => {
  nearbyAirports.next()
    .then(r => res.send(r))
    .catch(err => res.status(500).send(err));
});

app.get("/nearby-airports-previous", (req, res) => {
  nearbyAirports.previous()
    .then(r => res.send(r))
    .catch(err => res.status(500).send(err));
});

app.get("/nearby-airports-first", (req, res) => {
  nearbyAirports.first()
    .then(r => res.send(r))
    .catch(err => res.status(500).send(err));
});

app.listen(PORT, () => console.log('Listening on port ' + PORT));