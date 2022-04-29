import "./App.scss";
import Button from "./components/Button/Button"
import Hero from "./components/Hero/Hero";
import ListItem from "./components/ListItem/ListItem";
import PaginationComponent from "./components/PaginationComponent/PaginationComponent";

function App() {
  return (
    <div className="container">
      <div className="hero">
        <Hero />
      </div>
      <div className="button-bar">
        <Button text="SHUFFLE PAGE"></Button>
        <Button text="REST"></Button>
      </div>
      <div className="list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
       
      </div>
      <div className="pagination">
        <PaginationComponent />
      </div>
    </div>
  );
}

export default App;
