### App Challenges
- Need to get user's actual time
- Need to somehow determine the time of day(via AM/PM or the 24-hour format)
- Need to change text/styling based on time of day

### Google Time Zone API
- Timezone API request form
- `https://maps.googleapis.com/maps/api/timezone/outputFormat?parameters`
- [] Create API key
- not certain how to use this api but first will create key

* THIS WILL NOT WORK, GOOGLE TIMEZONE API BASED ON GOOGLE MAPS AND REQUIRES BILLING, NOT FREE :(

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

### Geolocation Position Timestamp
- Position.timestamp: returns time at which location was retrieved
- precision to the milli-second (eg: 1553644528444)
- how to convert the milli-second to HH:MM:SS format, this would be so helpful!
  - create function like realTime(ms) {}
  - or function like getDate() {}
* no freaking clue

- NEW DAY 032719: trying to still figure out the freaking milli-second conversion
- In browser console:
  - `const theTime = new Date(1553711368725)`
  - `undefined`
  - `theTime`
  - `Wed Mar 27 2019 12:29:28 GMT-0600 (Mountain Daylight Time)`
- ^^^THIS IS GOLDEN

- currently: `position => console.log(position.timestamp)` returns `1553712028907`
- need to hold the timestamp in a variable like: let ms = position.timestamp

- this is also true in browser console:
  - `var time = new Date().getTime()``
  - `undefined`
  - `var date = new Date(time)`
  - `undefined`
  - `date`
  - `Wed Mar 27 2019 12:48:17 GMT-0600 (Mountain Daylight Time)`

  - but this isn't taking in the milliseconds timestamp from `position.timestamp`, it's just getting the time from the browser, which is also okay

- NEW DAY 040219: maybe i can use `Date()` to retrieve the user's time
  - maybe create a constructor() that sets `state` to some value
  - or use component life cycle to initially get the date

- [] Print timestamp with class-based component

## SIDENOTE
- I just realized that this entire time i am depending on the time of the user, not their zone.  Originally i wanted to to some how use their timezone to give them a conditional text.  BUT the conditional text is actually based on their time(I want to show them whether it's day or night).  Never cared about their timezone in the first place.  What would i do with a timezone of Mountain Standard Time etc?
- SOOO i should really just care about the time, not the time zone
- Unless i do something like: `It's 2:30pm in Mountain Standard Time and it's Day time` with a sun icon


### Next Tasks
- [] App: class-based component
- [] Build initial state and constructor()
- [] OR Build `componentDidMount` life cycle
- [] Also display the actual time

- play with different options
