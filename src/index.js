import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = { date: '' }

  constructor() {
    super()
    this.state = {
      date: new Date().toLocaleTimeString()
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
