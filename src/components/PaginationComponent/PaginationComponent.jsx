import React from "react";
import Pagination from "@mui/material/Pagination";
import "./PaginationComponent.scss";

const PaginationComponent = () => {
  return (
    <>
      <Pagination count={3} color="primary" className="pages" />
    </>
  );
};

export default PaginationComponent;
