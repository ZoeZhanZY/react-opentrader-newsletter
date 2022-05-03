import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./PaginationComponent.scss";

const PaginationComponent = ({ pageCount, page, setPage }) => {
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={pageCount}
        color="primary"
        className="pages"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default PaginationComponent;
