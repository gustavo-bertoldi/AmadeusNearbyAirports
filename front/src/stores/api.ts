import { type Writable, writable } from "svelte/store";
import { CONSTANTS } from "../stores/constants";

let back_url: string;
CONSTANTS.subscribe((v) => back_url = v.BACK_URL);

export function getNearbyAirports(lat: string, lon: string) {
  const url = `${back_url}/nearby-airports?lat=${lat}&lon=${lon}`;
  const request = new Request(url, { method: 'GET' });
  fetch(request)
    .then((response) => response.json())
    .then((data: any) => {
      nearbyAirports.set(JSON.parse(data.body))
    })
    .catch((err) => console.error(err));
}

export function next() {
  const url = `${back_url}/nearby-airports-next`;
  const request = new Request(url, { method: 'GET' });
  fetch(request)
    .then((response) => response.json())
    .then((data: any) => {
      nearbyAirports.set(JSON.parse(data.body))
    })
    .catch((err) => console.error(err));
}

export function previous() {
  const url = `${back_url}/nearby-airports-previous`;
  const request = new Request(url, { method: 'GET' });
  fetch(request)
    .then((response) => response.json())
    .then((data: any) => {
      nearbyAirports.set(JSON.parse(data.body))
    })
    .catch((err) => console.error(err));
}

export const nearbyAirports: Writable<any> = writable();