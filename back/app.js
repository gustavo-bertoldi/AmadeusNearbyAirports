const Amadeus = require('amadeus');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

let app = express();
const PORT = 3000;

let amadeus = new Amadeus();
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let next = () => { };
let previous = () => { };


app.get("/nearby-airports", (req, res) => {
  amadeus.referenceData.locations.airports.get({
    longitude: parseFloat(req.query.lon),
    latitude: parseFloat(req.query.lat),
    page: {
      limit: req.query.ipp
    }
  })
    .then((r) => {
      next = () => amadeus.next(r);
      previous = () => amadeus.previous(r);
      res.send(r)
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/nearby-airports-next", (req, res) => {
  next()
    .then((r) => {
      next = () => amadeus.next(r);
      previous = () => amadeus.previous(r);
      res.send(r)
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/nearby-airports-previous", (req, res) => {
  previous()
    .then((r) => {
      next = () => amadeus.next(r);
      previous = () => amadeus.previous(r);
      res.send(r)
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => console.log('Listening on port ' + PORT));