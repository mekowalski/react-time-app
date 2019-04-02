import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position.timestamp),
    error => console.log(error)
  )
  return (
    <div>
      Welcome to the Timezone App
      <p>Timestamp: </p>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

//Step 1: convert to class-based component
//Step 2: use Raact's state system
//L6: change to class-based comp and utilize either constructor for setting date
      //or component life cycle (componentDidMount()) for `getDate()`
      //then return in render() call

//L13: error callback, what happens if this call fails(possibly if user declines location knowledge)
      //request for location because geolocation holds the timestamp
      //although i might not even use geolocation, i may go with Date()
