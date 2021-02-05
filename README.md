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