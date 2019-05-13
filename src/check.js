import React from "react";
import style from "./recipe.module.css";

class Check extends React.Component {
  state = {
    isChecked: false
  };

  render() {
    return (
      <div
        className={
          this.state.isChecked ? `${style.checked}` : `${style.notChecked}`
        }
        onClick={() => this.setState({ isChecked: !this.state.isChecked })}
      />
    );
  }
}

export default Check;
