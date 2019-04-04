import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { date: new Date().toLocaleTimeString() }

  render() {
    return (
      <div>
        Welcome to the Time App
        <p>Timestamp: {this.state.date}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

//state: babel builds of the constructor() and initializes state simultaneously in this one line of code
