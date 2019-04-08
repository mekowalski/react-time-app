import React from 'react';

//build configuration for time of day conditionals
//keys are objects that can be called to tell user whether it's morning, afternoon or night
const timeConfig = {
  morning: {
    text: 'Good morning sunshine!',
    iconName: 'coffee'
  },
  afternoon: {
    text: 'Afternoon scout! Are you being productive?',
    iconName: 'battery half'
  },
  night: {
    text: 'Hey, start winding down for the end of day and bed.',
    iconName: 'moon'
  }
}

const getTimeOfDay = (time) => {
  if (time < 12) {
    return 'morning' //config: morning with icons of coffee/bath
  }
  else if (time < 18) {
    return 'afternoon' //config: afternoon with icons of sun/battery half(hehe) or js
  }
  else {
    return 'night' //config: night with icons of moon/bed/star
  }
}

const TimeContent = props => {
  const statement = getTimeOfDay(props.time)
  //reference time config objects
  const { text, iconName } = timeConfig[statement] // { text, iconName }

  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{statement}</h1>
      <i className={`${iconName} icon`} />
    </div>
  )
}

export default TimeContent

//1. configure the time of day here
//2. get the time of day via function
//3. display the content of the time of day text and icons
