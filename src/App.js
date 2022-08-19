import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        title="Card title"
        content="Some quick example text to build on the card title and make up the
              bulk of the card's content."
      >
        <img
          src="https://images.unsplash.com/photo-1643386527351-5f5678c1d956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80"
          className="card-img-top"
          alt=""
        />
      </Card>
      <Card
        title="Special title treatment"
        content="With supporting text below as a natural lead-in to additional
              content."
      />
    </>
  );
}

export default App;
