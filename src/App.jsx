import "./App.css";
import PizzaCard from "./components/PizzaCard";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const images = ["Arcobaleno", "Autunno", "Bresaola", "Calabrese", "Calzone"];

  return (
    <div className="App">
      <div className="title">
        <h1>Pizza Memory Game</h1>
      </div>
      <ScoreBoard />
      <div className="info">
        <h3>
          Click on every pizza image only once. Every click will shift the
          cards&apos; position.
        </h3>
      </div>
      <div className="cards">
        {images.map((img) => (
          <PizzaCard key={img} img={img} />
        ))}
      </div>
    </div>
  );
}

export default App;