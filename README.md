# "Where Is the ISS?" - Thinkful API Capstone Project
A responsive website that pulls data from two APIs, Youtube (http://youtube.com) and Wikipedia (https://wikipedia.com/) to marry the information wikipedia with the videos of any famous person.

## User Cases
This app is for users who want to lookup their favor star and find out their existing biography and also videos showcasing their talents.


### UI Flow
![UI Flow handwritten draft](https://github.com/KSherrell/where-is-the-iss-open-notify-api-capstone/blob/master/wireframe/ui-flow.jpg)
### Wireframe _main
![Wireframe _Main](https://github.com/KSherrell/where-is-the-iss-open-notify-api-capstone/blob/master/wireframe/wireframe-iss-main.jpg)
### Wireframe _User Cases
![Wireframe _User Case 1](https://github.com/KSherrell/where-is-the-iss-open-notify-api-capstone/blob/master/wireframe/wireframe-iss-user-cases.jpg)

## Working Prototype
You can access a working prototype of the app here: http://where-is-the-iss-open-notify-api-capstone.learn2code.club/

## Functionality
The app's functionality includes:
* The ability to view a video of the ISS traveling across the night sky.
* The app shows the current location of the ISS, updated every 7 seconds.
* The app returns the time and date of the next three passes of the ISS over a user-input location.
* The app lists the current crewmembers of the ISS.


## Technology
* HTML
* CSS
* JavaScript
* jQuery

* The app uses AJAX JSON calls to the <a href="http://api.open-notify.org/iss-now.json">Open Notify</a>Open Platform API to return ISS latitude and longitude, the time of the next three passes, and the names of the current crewmembers.
* The app uses AJAX JSON calls to the <a href="http://www.convert-unix-time.com/api">Convert Unix Time</a>Open Platform API to return the unix timestamp converted to an UTC formatted date and time.
* The app uses AJAX JSON calls to the <a href="https://maps.googleapis.com/maps/api">Google Maps and Google Geocode</a>Open Platform API to return the map showing the current location of the ISS and return the latitude and longitude of the user-input location.
