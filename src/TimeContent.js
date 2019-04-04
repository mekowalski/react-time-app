import React from 'react';

const getTimeOfDay = (time) => {
  if (time < 12) {
    return 'Morning Time' //config: morning with icons of coffee/bath
  }
  else if (time < 18) {
    return 'Afternoon Tea' //config: afternoon with icons of sun/battery half(hehe) or js
  }
  else {
    return 'Night Time' //config: night with icons of moon/bed/star
  }
}

const TimeContent = props => {
  const statement = getTimeOfDay(props.time)
  console.log(statement)
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
