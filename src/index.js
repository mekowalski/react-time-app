//1. import statements
import React from 'react';
import ReactDOM from 'react-dom';

//2. component App code
const App = () => {
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
