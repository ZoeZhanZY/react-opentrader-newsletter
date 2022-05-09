import "./App.scss";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import List from "./components/List/List";
import PaginationComponent from "./components/PaginationComponent/PaginationComponent";
import Button from "@mui/material/Button";

function App() {
  const [userLists, setUserLists] = useState({});
  const [listOrders, setListOrders] = useState({});
  const [renderedList, setRenderedList] = useState([]);
  const [adLink, setAdLink] = useState();
  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageNumberString = currentPage.toString();

  //============new version==============
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://reqres.in/api/users?page=" + currentPage
      );
      const { page, data, total_pages, support } = await res.json();
      const slicedData = data.slice(0, 5);
      const pageNumber = page.toString();
      const initialOrder = slicedData.map((i) => i.id);

      const newUserList = {
        [pageNumber]: {
          slicedData: [...slicedData],
        },
      };

      const newListOrder = {
        [pageNumber]: {
          order: [...initialOrder],
        },
      };

      if (!(currentPage in userLists)) {
        setListOrders({ ...listOrders, ...newListOrder });
      }

      setUserLists({ ...userLists, ...newUserList });
      setPageCount(total_pages);
      setAdLink(support.url);
    };
    fetchData();
  }, [currentPage]);


  useEffect(() => {
    console.log({ userLists });
    const targetData = userLists[currentPageNumberString]?.slicedData;
		const targetOrder = listOrders[currentPageNumberString]?.order;
		
    console.log({ targetData });
    const renderedData = targetOrder?.map((order) => {
      return targetData?.find((user) => user.id === order);
    });
    console.log("renderedData", renderedData);
    setRenderedList(renderedData);
  }, [userLists, listOrders, currentPage]);

  // ===========old version==============
  // // Fetch data from backend
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       "https://reqres.in/api/users?page=" + currentPage
  //     );
  //     const { page, data, total_pages, support } = await res.json();
  //     const slicedData = data.slice(0, 5);
  //     const newUserList = { page, slicedData };

  //     const isCurrentPageDataExisted = userLists.some(
  //       (pageObject) => pageObject.page === currentPage
  //     );

  //     if (!isCurrentPageDataExisted) {
  //       setUserLists([...userLists, newUserList]);
  //     }

  //     setPageCount(total_pages);
  //     setAdLink(support.url);
  //   };

  //   fetchData();
  // }, [currentPage]);

  // // Update rendered list data
  // useEffect(() => {
  //   console.log("userLists", userLists);

  //   const renderedData =
  //     userLists.length > 0 &&
  //     userLists.find((el) => el.page === currentPage)?.slicedData;

  //   setRenderedList(renderedData);
  // }, [userLists, currentPage]);

  const handleShuffle = () => {
    const randomShuffle = (a, b) => {
      return 0.5 - Math.random();
    };

    const targetOrder = listOrders[currentPageNumberString]?.order;
    const shuffledOrder = [...targetOrder.sort(randomShuffle)];

    console.log({ shuffledOrder });

    const newListOrders = { ...listOrders };
    newListOrders[currentPageNumberString].order = shuffledOrder;
    setListOrders(newListOrders);
  };
  const handleReset = () => {
    const compareNumber = (a, b) => {
      return a - b;
    };

    const targetOrder = listOrders[currentPageNumberString]?.order;
    const resetOrder = [...targetOrder.sort(compareNumber)];
    console.log({ resetOrder });

    const newListOrders = { ...listOrders };
    newListOrders[currentPageNumberString].order = resetOrder;
    setListOrders(newListOrders);
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
