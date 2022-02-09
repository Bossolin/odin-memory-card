import React from "react";

const PizzaCard = ({ img, clickedImages, setClickedImages, setBestScore }) => {
  const handleClick = () => {
    if (clickedImages.find((image) => image === img)) {
      setBestScore(clickedImages.length);
      setClickedImages([]);
    } else setClickedImages((prevState) => [...prevState, img]);
  };

  return (
    <div className="pizza-card" onClick={handleClick}>
      <img src={`./img/${img}.png`} alt={img} />
      <p>{img}</p>
    </div>
  );
};

export default PizzaCard;
