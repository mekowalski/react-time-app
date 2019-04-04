import React from 'react';

const getTimeOfDay = (date) => {
  //return string eith morning or evening
  if (date >= 12) {
    return 'it is morning time'
  }
  else {
    return 'it is night time'
  }
}

const TimeContent = props => {
  const time = getTimeOfDay(props.date)
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
