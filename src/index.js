import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { date: new Date().toLocaleTimeString() }

  //deciding if life cycle is necessary
  //initial data-loading
  //best practice, do not data-load in constructor(), you can BUT it's recommended in componentDidMount()
  //state techinically only changes when new time is retrieved
  //really don't know if i'll use this life cycle at all
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
