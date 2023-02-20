# Basic-Onboarding-Script
Google App Script with a Google Sheets to send an alert email about a new hire that will be starting soon

Written to test my knowledge with Google App Script (Javascript)

**Note**
This is not an ideal way to onboard people. If your company is small enough, you probably won't need this. If your company is large enough, this method will not be ideal. Especially if you have a robust HRIS system, Identity Management, etc.

# Goal
- To share information between HR and IT and whoever else may need it

# Before Running
- Change the `ticketSystemEmail` variable

# Running the Script
- Create the Spreadsheet
- Add the code as an App Script
- Set the trigger to run every X amount of time (Whatever works best for you)

# Features/Flow
- Looks at a Google Sheet and parses the rows and columns
- Data is emailed to whoever needs it (ticketing system, individual, etc) and a ticket may be created

# Future Improvements
- Add more parsing fields
- Error Handling
- Starting from last checked location (row)
