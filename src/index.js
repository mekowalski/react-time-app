import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //default state set up
  //this also works without constructor()!
  state = { date: new Date().toLocaleTimeString() }

  //React requires a render() method to return JSX
  render() {
    return (
      <div>
        Welcome to the Timezone App
        <p>Timestamp: {this.state.date}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
