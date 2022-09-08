class NearbyAirports {
  #response;
  #client;

  constructor(client) {
    this.#client = client;
  }

  get(lat, lon, ipp = 10) {  
    return new Promise((resolve, reject) => {
      this.#client.referenceData.locations.airports.get({
        longitude: lon,
        latitude: lat
      }).then(r => {
        this.#response = r;
        resolve(r.result);
      }).catch(e => {
        reject(new Error("NearbyAirports - get: " + e.message))
      });
    });
  }

  next() {
    return new Promise((resolve, reject) => {
      if (this.#response) {
        this.#client.next(this.#response)
          .then(r => {
            this.#response = r;
            resolve(r.result)
          }).catch(e => {
            reject(new Error("NearbyAirports - next: " + e.message))
          });
      } else reject(new Error("No previous response for pagination"))
    });
  }

  previous() {
    return new Promise((resolve, reject) => {
      if (this.#response) {
        this.#client.previous(this.#response)
          .then(r => {
            this.#response = r;
            resolve(r.result)
          }).catch(e => {
            reject(new Error("NearbyAirports - previous: " + e.message))
          });
      } else reject(new Error("No previous response for pagination"))
    });
  }

  first() {
    return new Promise((resolve, reject) => {
      if (this.#response) {
        this.#client.first(this.#response)
          .then(r => {
            this.#response = r;
            resolve(r.result)
          }).catch(e => {
            reject(new Error("NearbyAirports - first: " + e.message))
          });
      } else reject(new Error("No previous response for pagination"))
    });
  }
}

module.exports = NearbyAirports;