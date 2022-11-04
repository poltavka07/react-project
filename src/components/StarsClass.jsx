import React from "react";

class StarsClass extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      pos: 0,
      // stan: 0,
    };
  }

  //   starMax = () => {
  //     console.log("click");
  //     console.log(this.props.posid);
  //     // this.setState({ pos: 1 });

  //     if (this.state.pos !== 0) {
  //       this.setState({ pos: this.state.pos + 1 });
  //       console.log(this.state.pos);
  //     } else {
  //       this.setState({ pos: 0 });
  //     }
  //   };

  render() {
    return (
      <div className="rating">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
          <StarCl
            id={index}
            setRate={setValue}
            active={value}
            key={index}
          ></StarCl>
        ))}
      </div>
    );
  }
}

export default StarsClass;
