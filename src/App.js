import "./index.css";
import Question from "./Components/Question";

function App() {
  return (
    <main>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <section className="container">
        <h1 className="h1-title">Star Trek</h1>

        <p className="p-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          enim nostrum quisquam repellendus officiis unde nesciunt accusamus
          molestiae illo asperiores dolorem modi, quas corporis hic fuga commodi
          ad quos vel? Excepturi quibusdam esse reprehenderit illum impedit
          beatae dolores quae facilis perferendis iste officia sint porro nulla
          eaque, iure mollitia voluptates blanditiis quam labore delectus optio
          ipsum consectetur. Ab fugit porro sunt neque voluptas deleniti dolorem
          quod repellat, ratione tenetur.
        </p>
        <Question />
      </section>
    </main>
  );
}

export default App;
