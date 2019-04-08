import React from 'react';

//build configuration for time of day conditionals
//keys are objects that can be called to tell user whether it's morning, afternoon or night
const timeConfig = {
  morning: {},
  afternoon: {},
  night: {}
}

const getTimeOfDay = (time) => {
  if (time < 12) {
    return 'Morning' //config: morning with icons of coffee/bath
  }
  else if (time < 18) {
    return 'Afternoon' //config: afternoon with icons of sun/battery half(hehe) or js
  }
  else {
    return 'Night' //config: night with icons of moon/bed/star
  }
}

const TimeContent = props => {
  const statement = getTimeOfDay(props.time)
  const icon = statement === 'morning' ? 'coffee' : 'battery half'
  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{statement}</h1>
      <i className={`${icon} icon`} />
    </div>
  )
}

export default TimeContent

//1. configure the time of day here
//2. get the time of day via function
//3. display the content of the time of day text and icons
