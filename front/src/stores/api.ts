import { type Readable, type Writable, writable, derived } from 'svelte/store';
import { CONSTANTS } from '../stores/constants';

export const nearbyAirports: Writable<any> = writable();
export const itemsPerPage: Writable<number> = writable(10);
export const latitude: Writable<string> = writable('49.00');
export const longitude: Writable<string> = writable('2.55');
export const page: Writable<number> = writable(1);
export const nbPages: Readable<number> = derived([nearbyAirports, itemsPerPage], ($v) => {
	if ($v[0]?.meta) return Math.ceil($v[0].meta.count / $v[1]);
	else return 0;
});

let back_url: string;
let ipp: number;
let lat: string;
let lon: string;
CONSTANTS.subscribe((v) => (back_url = v.BACK_URL));
latitude.subscribe((v) => (lat = v));
longitude.subscribe((v) => (lon = v));
itemsPerPage.subscribe((v) => (ipp = v));

export function getNearbyAirports() {
	const url = `${back_url}/nearby-airports?lat=${lat}&lon=${lon}&ipp=${ipp}`;
	const request = new Request(url, { method: 'GET' });
	sendRequest(request, 'first');
}

export function next() {
	const url = `${back_url}/nearby-airports-next`;
	const request = new Request(url, { method: 'GET' });
	sendRequest(request, 'next');
}

export function previous() {
	const url = `${back_url}/nearby-airports-previous`;
	const request = new Request(url, { method: 'GET' });
	sendRequest(request, 'previous');
}

export function first() {
	const url = `${back_url}/nearby-airports-first`;
	const request = new Request(url, { method: 'GET' });
	sendRequest(request, 'first');
}

type PaginationRequestType = 'next' | 'previous' | 'first';
const PAGE_UPDATE = {
	next: (v: number) => v + 1,
	previous: (v: number) => v - 1,
	first: () => 1
};

function sendRequest(req: Request, type: PaginationRequestType) {
	fetch(req)
		.then((response) => response.json())
		.then((data: any) => {
			page.update(PAGE_UPDATE[type]);
			nearbyAirports.set(data);
		})
		.catch((err) => console.error(err));
}
