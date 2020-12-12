import React from 'react';
import {connect} from "react-redux";
import {setCurrentPage} from "../redux/reducers/tableReducer";

const MAX_COUNT = 5;

const Pagination = ({currentPage, pageCount, setCurrentPage}) => {
  const pages = [];

  if (pageCount === 1) return null;
  else if (pageCount <= 5) {
    [...Array(pageCount).keys()].forEach(index => {
      const page = ++index;
      pages.push(
        <PageItem
          index={page}
          content={page}
          active={page === currentPage}
          setCurrentPage={setCurrentPage}
        />
      );
    });
  } else {
    let firstIndex = currentPage - Math.floor(MAX_COUNT / 2);

    if (firstIndex <= 0) firstIndex = 1;
    else if (firstIndex + MAX_COUNT > pageCount) {
      firstIndex = pageCount - MAX_COUNT + 1;
    }

    Array(MAX_COUNT)
      .fill(0)
      .map(() => firstIndex++)
      .forEach(page => {
        pages.push(
          <PageItem
            key={page}
            index={page}
            content={page}
            active={page === currentPage}
            setCurrentPage={setCurrentPage}
          />
        );
      });
  }

  return (
    <nav>
      <ul className="pagination">
        <PageItem
          index={1}
          content={<>&laquo;</>}
          disabled={currentPage === 1}
          setCurrentPage={setCurrentPage}
        />
        {pages}
        <PageItem
          index={pageCount}
          content={<>&raquo;</>}
          disabled={currentPage === pageCount}
          setCurrentPage={setCurrentPage}
        />
      </ul>
    </nav>
  );
}

const PageItem = ({index, content, active, disabled, setCurrentPage}) => {
  const handleClick = () => {
    setCurrentPage(index);
  }

  return (
    <li className={`page-item ${active && 'active'}  ${disabled && 'disabled'}`}>
      <button
        className='page-link'
        onClick={handleClick}
      >
        <span>{content}</span>
      </button>
    </li>
  );
}

const mapStateToProps = state => {
  return {
    currentPage: state.table.currentPage,
    pageCount: state.table.pageCount
  };
}

const mapDispatchToProps = {
  setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);