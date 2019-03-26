### App Challenges
- Need to get user's actual time
- Need to somehow determine the time of day(via AM/PM or the 24-hour format)
- Need to change text/styling based on time of day

### Google Time Zone API
- Timezone API request form
- `https://maps.googleapis.com/maps/api/timezone/outputFormat?parameters`
- [] Create API key
- not certain how to use this api but first will create key
*** THIS WILL NOT WORK, GOOGLE TIMEZONE API BASED ON GOOGLE MAPS AND REQUIRES BILLING, NOT FREE :(

### Styling
- Semantic UI (of course)
- use icons: moon/star for night, sun/coffee cup for morning

## App Tasks/Concerns/Stuff
- What Components to create
  - [x] App Component: in charge of determining the timezone and the current time of day
    - Functional Comp first then create Class-based Comp

  - [x] TimeContent: show different text/icons based on props(It is Morning/Night)


### TimeZone DB
- `http://api.timezonedb.com/v2.1/get-time-zone`
- [] Create account
- [] Create API key
- Now I don't know if i need to create a request for actually finding the user's timezone
- how to pinpoint time of user from browser console
