# Welcome to Appointment Picker
The purpose of this tool is to make appointment booking between people a lot easier.


# Introducing My App
where users can see free slots of Dr. John and they can book for whatever time period when Dr. John is available, Let's say I set my availability from 10AM - 5PM and slot Duration 30 minutes so free slot API it return all the available slots, which will suggest that any customer can book Dr. John at any of these times.

# Example use case

Create request ('/newSlot', body("day").isLength({min: 5}), generateSlot);
Get free slots ('/freeSlots/:date%:timezone', getFreeSlots);
Get start date and end date of bookings('/events/:startdate%:enddate', getEvents);
create new events based on available slots('/createEvent/:dateTime%:duration', createEvent);


## Quick Start(After clonning or downloading this project)
1. Open this project with your favorite editor(IDE), eg: Visual Studio Code
2. Run the command(to install the node_modules): npm install
3. Copy the config.example, create a new file, name ".env" in root folder (the same level     with .env.example) 
4. Create the database: Open Google firestore and you could create a free account in there change the below User settingd and run the app
6. To run this app, use the command: npm start
⚡️ Optimized with Webpack
⚡️Stay happy and happy coding⚡️ 
⚡️