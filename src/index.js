import React from 'react';
import ReactDOM from 'react-dom';
import TimeContent from './TimeContent'

class App extends React.Component {
  state = { date: new Date().getHours() }

  render() {
    return (
      <div>
      <TimeContent date={this.state.date} />
      {
        //YYYEEESSS!!! it worked!!! woot woot
      }
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
