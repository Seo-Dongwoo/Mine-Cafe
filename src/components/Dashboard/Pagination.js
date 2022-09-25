import React from "react";
import "../../assets/css/Dashboard/Pagination.css";

const Pagination = ({ total, page, setPage, limit }) => {
  const numPages = Math.ceil(total / limit);
  return (
    <div className="list-pagination">
      <button
        className="pagination-btn"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>
      {Array(numPages)
        .fill()
        .map((_, i) => (
          <button
            className="pagination-btn"
            key={i + 1}
            onClick={() => setPage(i + 1)}
            aria-current={page === i + 1 ? "page" : null}
          >
            {i + 1}
          </button>
        ))}
      <button
        className="pagination-btn"
        onClick={() => setPage(page + 1)}
        disabled={page === numPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
