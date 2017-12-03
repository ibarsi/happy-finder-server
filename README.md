# DISCONTINUED

I decided to stop development once [Quantum Mob](https://github.com/QuantumMob) shipped thier excellent [Dealmap](https://dealmap.io/) app first ☺️

# Happy Finder Server

Happy Finder Server is the backend server that supports the [Happy Finder](https://github.com/ibarsi/happy-finder) mobile app. The server is a Node backend that exposes APIs that read and store data to/from a Mongo database. The server has the following endpoints:

### Establishments

List of crowd sourced restourants and bars with food and drink deals.

### Places

Wrapper around the Google Maps API, returning lists of businesses based on specific search criteria (ie. keyword, lat/lng, etc).

### Suggestions

List of crowd sourced suggestions for potential deals. Suggestions are vetted and either rejected or later turned into establishments.

## LOCAL SETUP

After cloning the repo and installing dependencies via `npm install`, follow the steps below to get up and running.

1. Install Mongo
2. Run mongo locally and create a collection named `happy-finder-dev`.
3. Create `.env`, using `.env.ex` as a template, and fill in any missing values for your environment.
4. Start the server via `heroku local`.

You should now have a running server locally.
