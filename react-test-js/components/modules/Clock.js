import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      testObj: {
        apple: 2,
        banana: 3,
      },
    };
  }
  tick() {
    this.setState(function handler(state) {
      // state.date.setSeconds(state.date.getSeconds() + 1); // doesn't make a new object - doesn't trigger update
      return {
        // date: state.date,
        date: new Date(),
      };
    });
    this.setState((state) => {
      let ret = { ...state.testObj }; // Deep Copy
      ret.apple += 1;
      return {
        testObj: ret,
      };
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>Apple: {this.state.testObj.apple}</p>
        <p>Banana: {this.state.testObj.banana}</p>
      </div>
    );
  }
}

export default Clock;
