# Welcome to Appointment Picker
The purpose of this tool is to make appointment booking between people a lot easier.


# Introducing My App
where users can see free slots of Dr. John and they can book for whatever time period when Dr. John is available, Let's say I set my availability from 10AM - 5PM and slot Duration 30 minutes so free slot API it return all the available slots, which will suggest that any customer can book Dr. John at any of these times.
-->


## Quick Start(After clonning or downloading this project)
1. The project requires at least node v10
2. Open this project with your favorite editor(IDE), eg: Visual Studio Code
3. Run the command(to install the node_modules): npm install
4. Copy the config.example, create a new file, name ".env" in root folder (the same level     with .env.example) 
5. Create the database: Open Google firestore and you could create a free account in there change the below User settings and run the app
6. Stay happy and happy coding


### Run the application

Application will start on port `8000` in the server side.
Application will start on port `3000` in the client side.
npm run dev would help in running both server and client concurrently.

### Endpoint

```
POST /api/createEvent/:dateTime%:duration
```
Example test request "http://localhost:8000/api/createEvent/2034-10-05&15:30:00&GMT-0800%30"

Explaination about parameters used:
The dateTime must be in the form yyyy-mm-dd&hh:mm:ss&GMT+hhmm, e.g 2121-06-30&12:35:00&GMT+0500
The duration is in minutes mm e.g. 30 for thirty minutes and 90 for ninety minutes


Parameters

| Parameter      | Description                                    |
| -------------- | ---------------------------------------------- |
| `dateTime`     | Date relative to time zone to book appointment |
| `duration`     | The duration of appointment will be in minutes |
|

Example readings

| dateTime (`yyyy-mm-dd&hh`) | duration (`mm`)       |
| -------------------        | ----------------------:|
| ``        |                |
| ``        |                |

Using CURL
$ curl \
 -X POST \
  -H "Content-Type: application/json" \
  "http://localhost:8080/api/createEvent/:dateTime%:duration" \

The above command returns 200 OK and `{}`.
----------------------------------------------------------------------------------------------
Endpoint
```
GET /api/freeSlots/:date%:timezone
```
Example test request: "http://localhost:8000/api/freeSlots/2021-02-13%-0500"

Explaination about parameters used:
The date must be in the form yyyy-mm-dd e.g. 2013-09-21.
The timezone must be the relavitve time to the GMT e.g. -0500 is 5 hours behind GMT or +0100 is one hour ahead of GMT.


Parameters

| Parameter      | Description                                        |
| -------------- | ---------------------------------------------------|
| `date`         | The date must be in the form yyyy-mm-dd            |
|`timezone `     | The timezone must be the relavitve time to the GMT |


Example Readings
[

]

Using CURL
```console
$ curl "http://localhost:8000/api/createEvent/:date%:timezone"
```

The above command returns 200 OK and `{}`.

-----------------------------------------------------------------------------------------------
Endpoint
```
GET /api/events/:startdate%:enddate
```
Example test request: "http://localhost:8000/api/events/2012-05-12&2012-05-14"

Explaination about parameters used:
Both startdate and enddate have the format yyyy-mm-dd e.g. 2013-04-10 is one hour ahead of GMT


Parameters:

| Parameter           | Description                      |
| ------------------- | -------------------------        |
| `startdate`         | Starting date of available slots |
|  `enddate`          |  End date of available slots     |

Example readings:

[



]

Using CURL:

```console
$ curl "http://localhost:8000/api/events/:startdate%:enddate"
```
About database:

Setup a user account in firebase and add in firebase config details in the .env file with the below user configuration settings with the connection settings you find in firebase.
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID
  






<!-- ## Data format for Get Events
The path is
.....api/events/:startdate%:enddate

Both startdate and enddate have the format yyyy-mm-dd e.g. 2013-04-10

Example ....api/events/2012-05-12&2012-05-14

## Data format for obtaining Free Slots:
The path is
....api/freeSlots/:date%:timezone

The date must be in the form yyyy-mm-dd, e.g. 2013-09-21.
The timezone must be the relavitve time to the GMT e.g. -0500 is 5 hours behind GMT or +0100 is one hour ahead of GMT

Example ....api/freeSlots/2021-02-13%-0500

## Data format for Create Event
The path is
.....api/createEvent/:dateTime%:duration

The dateTime must be in the form yyyy-mm-dd&hh:mm:ss&GMT+hhmm, e.g 2121-06-30&12:35:00&GMT+0500
The duration is in minutes mm e.g. 30 for thirty minutes and 90 for ninety minutes

Example ....api/createEvent/2034-10-05&15:30:00&GMT-0800%30

## Data format for Get Events
The path is
.....api/events/:startdate%:enddate

Both startdate and enddate have the format yyyy-mm-dd e.g. 2013-04-10

Example ....api/events/2012-05-12&2012-05-14 -->

