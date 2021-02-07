# Welcome to Appointment Picker
The purpose of this tool (GHL) is to make appointment booking between people a lot easier. The
usual process is to exchange mails between people till they find a convenient time.

# Introducing My App
where users
can see free slots of Dr. John and they can book for whatever time period when Dr. John is
available
Let's say I set my availability from 10AM - 5PM and slot Duration 30 minutes so free slot API
you are supposed to return all the available slots, which will suggest that any customer can
book Dr. John at any of these times.

# Example use case
Example Output (incase we don't have any event)
[
'2019-11-14T10:00:00',
'2019-11-14T10:30:00',
'2019-11-14T11:00:00',
'2019-11-14T11:30:00',
....
'2019-11-14T16:30:00', // as the your availability is upto 5PM]
In case I have an event already at 2019-11-14T10:00:00, that slot should be excluded.


## Quick Start(After clonning or downloading this project)
1. Open this project with your favorite editor(IDE), eg: Visual Studio Code
2. Run the command(to install the node_modules): npm install
3. Copy the config.example, create a new file, name ".env" in root folder (the same level     with .env.example) 
4. Create the database: Open Google firestore and you could create a free account in there change the below User settingd and run the app
6. To run this app, use the command: npm start
7. Stay happy and happy coding

## Data format for obtaining Free Slots:
The path is
....api/freeSlots/:date%:timezone

The date must be in the form yyyy-mm-dd, e.g. 2013-09-21.
The timezone must be the relavitve time to the GMT e.g. -0500 is 5 hours behind GMT or +0100 is one hour ahead of GMT

Example ....api/freeSlots/2021-02-13%-0500

## Data format for Creat Event
The path is
.....api/createEvent/:dateTime%:duration

The dateTime must be in the form yyyy-mm-dd&hh:mm:ss&GMT+hhmm, e.g 2121-06-30&12:35:00&GMT+0500
The duration is in minutes mm e.g. 30 for thirty minutes and 90 for ninety minutes

Example ....api/createEvent/2034-10-05&15:30:00&GMT-0800%30

## Data format for Get Events
The path is
.....api/events/:startdate%:enddate

Both startdate and enddate have the format yyyy-mm-dd e.g. 2013-04-10

Example ....api/events/2012-05-12&2012-05-14

