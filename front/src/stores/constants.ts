import { readable, type Readable } from 'svelte/store';

export const CONSTANTS: Readable<{ [index: string]: string }> = readable({
	AMADEUS_BLUE: 'rgb(0,94,184)',
	BACK_URL: 'http://localhost:3000'
});
