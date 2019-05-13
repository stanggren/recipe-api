import React from "react";
import style from "./recipe.module.css";
import Check from "./check.js";
import "./App.css";

const Recipe = ({ title, calories, image, ingredients, dietLabels }) => {


  return (
    <div className={style.recipe}>
      <div className={style.titleBox}>
        <h1>{title}</h1>
      </div>
      <div className="navBar">
        <div className="tooltip">
          <p>Info</p>
          <div className="tooltipcontent">
            <p>Calories: {Math.round(parseFloat(calories))}</p>
            <p>Diet: {dietLabels}</p>
          </div>
        </div>
        <div className="tooltip">
          <p>Picture</p>
          <div className="imagecontent">
            <img className="image" src={image} alt="" />
          </div>
        </div>
      </div>
      <ol className={style.ingredients}>
        {ingredients.map(ingredient => (
          <li>
            <Check />
            {ingredient.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;

// NAVBAR Recipe, Cooking-Order, Picture
