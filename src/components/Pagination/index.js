import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { PaginationWrapper, PageButton } from "./styles";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    for (let i = 1; i <= totalPages; i++) {
      const active = i === currentPage;

      pageButtons.push(
        <PageButton key={i} onClick={() => handleClick(i)} active={active}>
          {i}
        </PageButton>
      );
    }

    return pageButtons;
  };

  return <PaginationWrapper>{renderPageButtons()}</PaginationWrapper>;
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
