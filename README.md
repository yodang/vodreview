# VodReview
A Web application to review battle footage uploaded to twitch.tv alongside a fight
report from fflogs.com.

## Setup

Edit `index.html` so `api_base` points to the URL where the backend will be deployed.
Configure your server to serve index.html

Edit the `.env` file in the backend folder to contains your fflogs api key, as well
as a twitch cliend id and secret key.

Start the backend by running

```
$ npm install
$ npm start
```

## Usage

Enter the id if the twitch video in the VOD ID field, and the id of the report in the
Report ID field. Click Load on both field.

The clip will load and a list of pulls will be displayed. If the fight is mapped, a button
will allow to seek to each phases. Otherwise the video will seek to the start of the pull.