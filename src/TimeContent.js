import React from 'react';

const getTimeOfDay = (date) => {
  //return string eith morning or evening
  // if (date >= 12) {
  //   return 'it is morning time'
  // }
  // else {
  //   return 'it is night time'
  // }

  //trying with 3 conditionals of morning, afternoon and night
  if (date >= 11) {
    return 'Morning Time'
  }
  else if (date < 11 && date > 18) {
    return 'Afternoon Tea'
  }
  else {
    return 'Night Time'
  }
}

const TimeContent = props => {
  const time = getTimeOfDay(props.date)
  console.log(time)
  return (
    <div>
      This is the Time Content page
    </div>
  )
}

export default TimeContent

//1. configure the time of day here
//2. get the time of day via function
//3. display the content of the time of day text and icons
