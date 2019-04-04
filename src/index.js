import React from 'react';
import ReactDOM from 'react-dom';
import TimeContent from './TimeContent'

class App extends React.Component {
  state = { time: new Date().getHours() }

  render() {
    return (
      <div>
        <TimeContent time={this.state.time} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
