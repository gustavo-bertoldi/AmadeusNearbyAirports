import { type Writable, writable } from "svelte/store";
import { CONSTANTS } from "../stores/constants";

export const nearbyAirports: Writable<any> = writable();
export const itemsPerPage: Writable<number> = writable(10);
export const latitude: Writable<string> = writable('49.00');
export const longitude: Writable<string> = writable('2.55');
export const page: Writable<number> = writable(1);

let back_url: string;
let ipp: number;
let lat: string;
let lon: string;
CONSTANTS.subscribe((v) => back_url = v.BACK_URL);
latitude.subscribe((v) => lat = v);
longitude.subscribe((v) => lon = v);
itemsPerPage.subscribe((v) => {
  ipp = v;
  getNearbyAirports(); 
});

export function getNearbyAirports() {
  const url = `${back_url}/nearby-airports?lat=${lat}&lon=${lon}&ipp=${ipp}`;
  const request = new Request(url, { method: 'GET' });
  fetch(request)
    .then((response) => response.json())
    .then((data: any) => {
      page.set(1);
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
      page.update((v) => v + 1);
      nearbyAirports.set(JSON.parse(data.body))
    })
    .catch((err) => console.error(err));
}

export function previous() {
  const url = `${back_url}/nearby-airports-previous`;
  const request = new Request(url, { method: 'GET' });
  page.update((v) => v - 1);
  fetch(request)
    .then((response) => response.json())
    .then((data: any) => {
      page.update((v) => v - 1);
      nearbyAirports.set(JSON.parse(data.body))
    })
    .catch((err) => console.error(err));
}
