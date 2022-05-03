import "./App.scss";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import List from "./components/List/List";
import PaginationComponent from "./components/PaginationComponent/PaginationComponent";
import Button from "@mui/material/Button";

function App() {
  const [users, setUsers] = useState([]);
  const [adLink, setAdLink] = useState();
  const [pageCount, setPageCount] = useState();
  const [page, setPage] = useState(1);
  const [reset, setReset] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  let shuffleCount = 0;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://reqres.in/api/users?page=" + page);
      const json = await res.json();
      const processedJson = json.data.slice(0, 5);
      // const shuffledJson = processedJson.sort((a, b) => {
      //   return 0.5 - Math.random();
      // });

      // reset ? setUsers(processedJson) : setUsers(shuffledJson);
      // shuffle ? setUsers(shuffledJson) : setUsers(processedJson);
      setUsers(processedJson);
      setPageCount(json.total_pages);
      setAdLink(json.support.url);
    };
    fetchData();
  }, [page, reset]);

  const handleShuffle = () => {
    const shuffledUsers = [
      ...users.sort((a, b) => {
        return 0.5 - Math.random();
      }),
    ];

    setUsers(shuffledUsers);
    // shuffleCount += 1;
    console.log({ users });
  };
  const handleReset = () => {
    setReset(!reset);
  };

  return (
    <div className="container">
      <div className="hero">
        <Hero adLink={adLink} />
      </div>
      <div className="button-bar">
        <Button color="primary" variant="contained" onClick={handleShuffle}>
          SHUFFLE PAGE
        </Button>
        <Button color="warning" variant="contained" onClick={handleReset}>
          RESET
        </Button>
      </div>
      <div className="list">
        <List renderedList={users} />
      </div>
      <div className="pagination">
        <PaginationComponent
          pageCount={pageCount}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default App;
