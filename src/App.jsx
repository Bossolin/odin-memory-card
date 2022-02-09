import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PizzaCard from "./components/PizzaCard";

function App() {
  const [images, setImages] = useState([
    "Autunno",
    "Bresaola",
    "Calabrese",
    "Calzone",
    "Carnivora",
    "Inferno",
    "Margherita Sbagliata",
    "Parma Bianca",
    "Prosciutto Cotto",
    "Quattro Stagioni",
    "Siciliana",
    "Vegetariana",
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
      <Header score={clickedImages.length} bestScore={bestScore} />
      <div className="cards">
        {images.map((img) => (
          <PizzaCard key={img} img={img} handleClick={handleClick} />
        ))}
      </div>
      <div className="footer">Footer Info</div>
    </div>
  );
}

export default App;
