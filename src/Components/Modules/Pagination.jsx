import React, { useState } from "react";
import "./Pagination.css";

export default function Pagination({ page, setPage }) {
  const previousHandler = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const nextHandler = () => {
    if (page < 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div className="pagination">
      <button
        onClick={previousHandler}
        className={page === 1 ? "disabled" : null}
      >
        Previous
      </button>
      <p className={page === 1 ? "selected" : null}>1</p>
      <p className={page === 2 ? "selected" : null}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span className="span">...</span>
          <p className="selected">{page}</p>
        </>
      )}
      <span className="span">...</span>
      <p className={page === 9 ? "selected" : null}>9</p>
      <p className={page === 10 ? "selected" : null}>10</p>
      <button onClick={nextHandler} className={page === 10 ? "disabled" : null}>
        Next
      </button>
    </div>
  );
}
