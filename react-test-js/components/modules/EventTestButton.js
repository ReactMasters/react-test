import React, { Component } from "react";

class EventTestButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isArrFuncBtnOn: true,
      isBindingBtnOn: true,
    };
    this.handleWithBinding = this.handleWithBinding.bind(this);
  }

  handleWithArrowFunc() {
    this.setState((state) => ({
      isArrFuncBtnOn: !state.isArrFuncBtnOn,
    }));
  }

  handleWithBinding() {
    this.setState((state) => ({ isBindingBtnOn: !state.isBindingBtnOn }));
  }

  handleWithExperiemtalSyntax = () => {
    this.setState((state) => {
      return {
        isBindingBtnOn: !state.isBindingBtnOn,
      };
    });
  };
  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit triggered");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="button" onClick={() => this.handleWithArrowFunc()}>
          Turn ArrowFuncBtn {this.state.isArrFuncBtnOn ? "OFF" : "ON"}
        </button>
        <button type="submit" onClick={this.handleWithBinding}>
          Turn BoundBtn {this.state.isBindingBtnOn ? "OFF" : "ON"} & Submit!
        </button>
        <button type="button" onClick={this.handleWithExperiemtalSyntax}>
          Turn ExperiemtalSyntaxBtn {this.state.isBindingBtnOn ? "OFF" : "ON"}
        </button>
      </form>
    );
  }
}

export default EventTestButton;