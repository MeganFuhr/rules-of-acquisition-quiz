import "./index.css";
import Question from "./Components/Question";
import EndGame from "./Components/EndGame";

function App() {
  return (
    <main>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <section className="container">
        <h1 className="h1-home">
          How well do you know the Rules of Acquisition?
        </h1>

        <p className="p-home">
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
        <Question />
      </section>
    </main>
  );
}

export default App;
