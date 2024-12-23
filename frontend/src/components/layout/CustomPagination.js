import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "react-js-pagination";

const CustomPagination = ({ resPerPage, filteredProductCount }) => {

  const [currentPage, setCurrentPage] = useState();

  let [searchParams] = useSearchParams();
  const navigate = useNavigate()

  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  const setCurrentPageNumber = (pageNumber) => {
    setCurrentPage(pageNumber)

    if(searchParams.has("page")) {
        searchParams.set("page", pageNumber)
    } else {
        searchParams.append("page", pageNumber)
    }
    const path = window.location.pathname + "?" + searchParams.toString()
    navigate(path)
  }


  return (
    <div className="d-flex justify-content-center my-3">
      {filteredProductCount > resPerPage && (
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={resPerPage}
          totalItemsCount={filteredProductCount}
          onChange={setCurrentPageNumber}
          nextPageText={"Next"}
          prevPageText={"Prev"}
          firstPageText={"First"}
          lastPageText={"Last"}
          itemClass="page-item"
          linkClass="page-link"
        />
      )}
    </div>
  );
};

export default CustomPagination;
