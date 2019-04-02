import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //initial state = Date?
  //or componentDidMount?
  //or constructor?
  state = { date: '' }

  constructor() {
    super()
    this.state = {
      date: new Date().toLocaleString()
    }
  }

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
