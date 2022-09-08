# Nearby airports

This prototype is a simple app allowing you to find nearby airports to a point defined by latitude and longitude. This is a good example of hw to implement the pagination feature available  on selected APIs.
The app uses the Amadeus Node SDK in the backend and the **Airport Nearest Relevant** API, that supports pagination.

## Run locally
Before running the following commands, don't forget to set your Amadeus credentials in the `AMADEUS_CLIENT_ID` and `AMADEUS_CLIENT_SECRET` env variables or add a `.env` file in the `back` folder.

```bash
cd ./back
node app.js

cd ../front
npm run dev
```
A development server will start in the port shown.