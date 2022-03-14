import React from "react";
import PropTypes from "prop-types";

/**
 * Card
 * @param {string} img image of categorie
 * @param {number} numberUnit number of calorie, protein, carbohydrate or lipid
 * @param {string} unit unité of calorie, protein, carbohydrate or lipid
 * @param {string} categorie calorie, protein, carbohydrate or lipid
 * @returns card used for calorie, protein, carbohydrate and lipid
 */

function Card({ img, numberUnit, unit, categorie }) {
  return (
    <div className="card">
      <img className="img-card" src={img} alt="" />
      <div className="unit-categories">
        <p className="unit">
          {numberUnit}
          {unit}
        </p>
        <p className="categorie">{categorie}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  numberUnit: PropTypes.number,
  unit: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
};

export default Card;
