import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { date: new Date().toLocaleTimeString() }

  render() {
    return (
      <div>
        Welcome to the Time App(testing)
        <p>Timestamp: {this.state.date}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
