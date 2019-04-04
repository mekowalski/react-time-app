import React from 'react';
import ReactDOM from 'react-dom';
import TimeContent from './TimeContent'

class App extends React.Component {
  state = { date: new Date().toLocaleTimeString() }

  render() {
    return (
      <div>
        <TimeContent />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
