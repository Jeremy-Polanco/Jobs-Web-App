import react from "react";
import { useState } from "react";

function Pages({ setNumberOfJobs, currentPage, setCurrentPage }) {
  let pages = [1, 2, 3];
  const changePage = (index) => {
    setNumberOfJobs(5 * index);
    setCurrentPage(index);
  };
  const prevPage = (index) => {
    if (index > 1) {
      let newPage = index - 1;
      setCurrentPage(newPage);
      changePage(newPage);
    } else setCurrentPage(index);
  };
  const nextPage = (index) => {
    if (index < 3) {
      let newPage = index + 1;
      setCurrentPage(newPage);
      changePage(newPage);
    } else setCurrentPage(index);
  };

  return (
    <div className="pagination">
      <div className="prev-arrow page" onClick={() => prevPage(currentPage)}>
        <i className="fa fa-angle-left icon"></i>
      </div>
      {pages.map((page, index) => {
        index++;
        return (
          <div
            key={index}
            className={`page ${currentPage === index ? "active" : ""}`}
            onClick={() => changePage(index)}
          >
            <span className="number">{page}</span>
          </div>
        );
      })}
      <div className="ellipsis-icon ">
        <i className="fa fa-ellipsis-h icon"></i>
      </div>
      <div className="next-arrow page" onClick={() => nextPage(currentPage)}>
        <i className="fa fa-angle-right icon"></i>
      </div>
    </div>
  );
}

export default Pages;
