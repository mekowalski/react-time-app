import React from 'react';
import ReactDOM from 'react-dom';
import TimeContent from './TimeContent'

class App extends React.Component {
  state = { date: new Date().getHours() }

  render() {
    return (
      <div>
      Time: {this.state.date}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
