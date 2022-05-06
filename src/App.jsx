import "./App.scss";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import List from "./components/List/List";
import PaginationComponent from "./components/PaginationComponent/PaginationComponent";
import Button from "@mui/material/Button";

function App() {
  const [userLists, setUserLists] = useState([]);
  const [renderedList, setRenderedList] = useState([]);
  const [adLink, setAdLink] = useState();
  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from backend
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://reqres.in/api/users?page=" + currentPage
      );
      const { page, data, total_pages, support } = await res.json();
      const slicedData = data.slice(0, 5);
      const newUserList = { page, slicedData };

      const isCurrentPageDataExisted = userLists.some(
        (pageObject) => pageObject.page === currentPage
      );

      if (!isCurrentPageDataExisted) {
        setUserLists([...userLists, newUserList]);
      }

      setPageCount(total_pages);
      setAdLink(support.url);
    };

    fetchData();
  }, [currentPage]);

  // Update rendered list data
  useEffect(() => {
    console.log("userLists", userLists);

    const renderedData =
      userLists.length > 0 &&
      userLists.find((el) => el.page === currentPage)?.slicedData;

    setRenderedList(renderedData);
  }, [userLists, currentPage]);

  const handleShuffle = () => {
    const randomShuffle = (a, b) => {
      return 0.5 - Math.random();
    };
    const targetUserList = userLists.find(
      (el) => el.page === currentPage
    ).slicedData;
    const shuffledList = [...targetUserList.sort(randomShuffle)];

    setRenderedList(shuffledList);
  };

  const handleReset = () => {
    const compareNumber = (a, b) => {
      return a.id - b.id;
    };

    const targetUserList = userLists.find(
      (el) => el.page === currentPage
    ).slicedData;
    const resetList = [...targetUserList.sort(compareNumber)];
    setRenderedList(resetList);
  };

  return (
    <div className="container" style={{ color: "white" }}>
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
        <List renderedList={renderedList} />
      </div>
      <div className="pagination">
        <PaginationComponent
          pageCount={pageCount}
          page={currentPage}
          setPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default App;
