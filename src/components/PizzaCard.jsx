import React from "react";

const PizzaCard = ({ img }) => {
  return (
    <div className="pizza-card">
      <img src={`./img/${img}.png`} alt={img} />
      <p>{img}</p>
    </div>
  );
};

export default PizzaCard;
