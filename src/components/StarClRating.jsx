import React from "react";
import StarCl from "./StarCl";

class StarClRating extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      valueLight: this.props.initRate,
      value: this.props.initRate,
      isBlocked: false,
    };
    this.setRate = this.setRate.bind(this);
    this.setDark = this.setDark.bind(this);
  }

  setRate(id, event) {
    if (this.state.isBlocked) {
      return;
    }
    this.setState({
      ...this.state,
      valueLight: id,
      value: event.type === "click" ? id : this.state.value,
    });
  }

  setDark() {
    this.setState({
      ...this.state,
      valueLight: 0,
      value: 0,
    });
  }

  render() {
    return (
      <>
        <div className="rating">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <StarCl
              id={index}
              setRate={this.setRate}
              setDark={this.setDark}
              valueLight={this.state.valueLight}
              active={this.state.value}
              key={index}
            ></StarCl>
          ))}
        </div>
        <button
          onClick={() => {
            this.setState({ ...this.state, isBlocked: !this.state.isBlocked });
          }}
        >
          click
        </button>
      </>
    );
  }
}

export default StarClRating;
