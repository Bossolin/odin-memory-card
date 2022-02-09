import { useEffect, useState } from "react";
import "./App.css";
import PizzaCard from "./components/PizzaCard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [images, setImages] = useState([
    "Arcobaleno",
    "Autunno",
    "Bresaola",
    "Calabrese",
    "Calzone",
    "Carnivora Bianca",
    "Carnivora",
    "Inferno",
  ]);
  const [clickedImages, setClickedImages] = useState([]);
  const [bestScore, setBestScore] = useState(0);

  function shuffleImages(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const handleClick = (img) => {
    if (clickedImages.find((image) => image === img)) {
      if (bestScore < clickedImages.length) setBestScore(clickedImages.length);
      setClickedImages([]);
    } else setClickedImages((prevState) => [...prevState, img]);
  };

  useEffect(() => {
    setImages((prevImages) => shuffleImages(prevImages));
  }, [clickedImages]);

  return (
    <div className="App">
      <div className="title">
        <h1>Pizza Memory Game</h1>
      </div>
      <ScoreBoard score={clickedImages.length} bestScore={bestScore} />
      <div className="info">
        <h3>
          Click on every pizza image only once. Every click will shift the
          cards&apos; position.
        </h3>
      </div>
      <div className="cards">
        {images.map((img) => (
          <PizzaCard key={img} img={img} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
