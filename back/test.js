const Amadeus = require('amadeus');
require('dotenv').config();
let amadeus = new Amadeus();

amadeus.referenceData.locations.airports.get(
  {
    longitude: 2.55,
    latitude: 49,
    page: {
      limit: 5
    }
  })
  .then(r => amadeus.next(r))
  .then(r => amadeus.next(r))
  .then(r => console.log(r.data))
  .catch(e => console.error(e));