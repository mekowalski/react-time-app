//1. import statements
import React from 'react';
import ReactDOM from 'react-dom';

//2. component App code
//change to class-based comp and utilize either constructor for setting date
//or component life cycle (componentDidMount()) for `getDate()`
//then return in render() call
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position.timestamp),
    // => 1553644528444
    error => console.log(error)
    //error callback, what happens if this call fails(possibly if user declines location knowledge)
    //request for location because geolocation holds the timestamp
    //although i might not even use geolocation, i may go with Date()
  )
  return (
    <div>
      Welcome to the Timezone App
      <p>Timestamp: </p>
    </div>
  )
}

//3. display content on browser
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
