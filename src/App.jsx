import { useState } from "react";
import "./App.css";
import PizzaCard from "./components/PizzaCard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const images = ["Arcobaleno", "Autunno", "Bresaola", "Calabrese", "Calzone"];

  const [clickedImages, setClickedImages] = useState([]);
  const [bestScore, setBestScore] = useState(0);

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
          <PizzaCard
            key={img}
            img={img}
            clickedImages={clickedImages}
            setClickedImages={setClickedImages}
            setBestScore={setBestScore}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
