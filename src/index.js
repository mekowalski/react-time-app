import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { date: new Date().toLocaleTimeString() }

  //deciding if life cycle is necessary
  componentDidMount() {
    console.log('component rendered to the screen')
  }

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
