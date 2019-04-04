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

//state only cares about user's date, specifically time hence .toLocaleTimeString()
//state is assigned to the JS object of date
//to use state, assign it to the state property(state not myState = { date: yada yada })
