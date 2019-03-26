### App Challenges
- Need to get user's actual time
- Need to somehow determine the time of day(via AM/PM or the 24-hour format)
- Need to change text/styling based on time of day

### Google Time Zone API
- Timezone API request form
- `https://maps.googleapis.com/maps/api/timezone/outputFormat?parameters`
- [] Create API key

### Styling
- Semantic UI (of course)
- use icons: moon/star for night, sun/coffee cup for morning

## App Tasks/Concerns/Stuff
- What Components to create
  - [] App Component: in charge of determining the timezone and the current time of day
    - Funtional Comp first then create Class-based Como
  - [] TimeContent: show different text/icons based on props(It is Morning/Night)
