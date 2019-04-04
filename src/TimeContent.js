import React from 'react';

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
  return (
    <div>
      <h1>Not sure what to do about configuring time of day yet</h1>
    </div>
  )
}

export default TimeContent

//1. configure the time of day here
//2. get the time of day via function
//3. display the content of the time of day text and icons
