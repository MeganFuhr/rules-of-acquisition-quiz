import "./index.css";
import Question from "./Components/Question";
import wrongAnswers from "./Data/wrongAnswers";
import rightAnswers from "./Data/rightAnswers";

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
          Do you have what it takes to be a Ferengi? To skillfully navigate the
          Great Material Continuum? To become the next
          <span className="emphasis"> GRAND NAGUS</span>?
          <br />
          <br />
          <br />
          Prove your worth below.
        </p>
      </section>
      <Question />
    </main>
  );
}

export default App;
