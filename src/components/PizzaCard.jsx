import React from "react";

const PizzaCard = ({ img, handleClick }) => {
  return (
    <div className="pizza-card" onClick={() => handleClick(img)}>
      <img src={`./img/${img}.png`} alt={img} />
      <p>{img}</p>
    </div>
  );
};

export default PizzaCard;
