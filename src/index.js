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
  )
  return (
    <div>
      Welcome to the Timezone App
    </div>
  )
}

//3. display content on browser
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
