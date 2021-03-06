import "./index.css";
import Question from "./Components/Question";
import GameOver from "./Components/GameOver";
import { useGlobalContext } from "./Context";

function App() {
  const { gameOver } = useGlobalContext();
  return (
    <main>
      <div className="twinkling"></div>
      <section className="container">
        <div className="div-bar engineering div-bar-engineering "></div>

        <h1
          aria-label="How well do you know the Rules of Acquisition?"
          className="h1-home"
        >
          How well do you know the Rules of Acquisition?
          <div className="div-bar science div-bar-science invert"></div>
        </h1>
        <p aria-label="Describes game." className="p-home">
          Do you have what it takes to be a Ferengi? To navigate the Great
          Material Continuum with skill and grace? To become the next
          <span className="emphasis"> GRAND NAGUS</span>?
          <br />
          <br />
          How many bars of
          <span className="emphasis"> gold-pressed latinum</span> can you earn?
        </p>
      </section>
      <section className="container">
        <div className="div-bar command div-bar-command"></div>
        {gameOver ? <GameOver /> : <Question />}
      </section>
    </main>
  );
}

export default App;
