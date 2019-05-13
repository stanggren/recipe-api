import React from "react";
import "./App.css";

const Nav = ({ calories, image }) => {
  return (
    <div className="navBar">
      <div className="tooltip">
        <p>Info</p>
        <div className="tooltipcontent">
          <p>{calories}</p>
          {/* <img className="image" src={App.image} alt=""/> */}
        </div>
      </div>
      <div>
        <p>Picture</p>
      </div>
    </div>
  );
};

export default Nav;
