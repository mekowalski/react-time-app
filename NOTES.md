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
- [x] App: class-based component
- [x] Build initial state and constructor() => 4/2/2019, 3:47:17 PM (WOOTWOOT)
- [] OR Build `componentDidMount` life cycle
- [x] Also display the actual time YYYEEESSS!!!
- play with different options

- To determine the time of day from AM or PM, or I can try with the actual time with a 24hr format
  - AM/PM: along the lines of `if (date = AM) return 'it is morning else return 'it is night'`
  - 24hr format: `const ampm = (hours >= 12) ? 'PM' : 'AM'`
  - (not sure how correct the code is but this is the general idea)

- Will i need to use `setState` or can i just use a default state?  For retrieving the info and using that data to display a message on page
- I'm not really going to change/modify/manipulate the state, it changes every time the page is refreshed

- Not sure how to create error code for an possible errors. (don't know what error would arise from getting a time.)
- re-render component to display error(update state)
- maybe don't worry about error messages for now, if an error legitimately arises later when the app runs THEN figure out an error

- NEW TASKS:
  - [x] Import TimeContent into index
  - [] Show the actual Time Content, either day or night
    - New props in TimeContent as `date` with value of `this.state.date`
    - Determine time of day in TimeContent
    - Display morning/night dependent on AM or PM
    - ^how to do this?
    `if date = AM return morning`? not sure if this is right

- Currently, I changed the conditional from AM/PM to 3 different times of day: morning/afternoon/night
- The conditional worked correctly in logging the right string in the browser!
- not sure if i should continue using `date` as my object since the app is not caring of th Date: April 4th, 2019.  It's main concern is displaying certain content dependent on the time of day, which is based on hours of a 24hour-format


### Customize TimeContent
- Dependent on time of day (00-12, 12-18 and 18-24)
- [] Display a statement respective to the time of day
- [] And include related icons that go with Statement
