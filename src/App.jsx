import "./App.scss";
//import ButtonComponent from "./components/ButtonComponent/ButtonComponent"
import Hero from "./components/Hero/Hero";
import ListItem from "./components/ListItem/ListItem";
import PaginationComponent from "./components/PaginationComponent/PaginationComponent";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="container">
      <div className="hero">
        <Hero />
      </div>
      <div className="button-bar">
        <Button color="primary" variant="contained">
          SHUFFLE PAGE
        </Button>
        <Button color="warning" variant="contained">
          RESET
        </Button>
        
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
