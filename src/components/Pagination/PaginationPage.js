import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class PaginationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      pageLimit: "",
      totalPages: "",
      currentPage: "",
      initialPage: "",
      pagesToShow: ""
    };
  }

  componentDidMount() {
    let { totalRecords , pageLimit, pagesToShow ,initialPage} = this.props;
    this.setState({
      totalRecords: totalRecords,
      pageLimit: pageLimit || 10,
      totalPages: Math.ceil(totalRecords / pageLimit),
      pagesToShow: pagesToShow || 5,
      currentPage: initialPage || 1
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      totalRecords: nextProps.totalRecords,
      pageLimit: nextProps.pageLimit || 10,
      totalPages: Math.ceil(nextProps.totalRecords / nextProps.pageLimit),
      pagesToShow: nextProps.pagesToShow || 5
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let { totalRecords, pageLimit, currentPage  } = this.state;
    if (
      totalRecords !== prevState.totalRecords ||
      pageLimit !== prevState.pageLimit
    ) {
      this.setPage(currentPage);
    }
  }

  setPage(page) {
    let { totalRecords, pageLimit, totalPages } = this.state;

    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }

    this.setState({
      currentPage: page
    });

    let startIndex = (page - 1) * pageLimit;
    let endIndex = Math.min(startIndex + pageLimit - 1, totalRecords - 1);

    this.props.onChangePage({
      pageLimit,
      totalPages,
      page,
      startIndex,
      endIndex
    });
  }

  getPager() {
    let { pagesToShow, currentPage, totalPages } = this.state;
    let pages = [],
      startFromNumber;

    if (totalPages <= pagesToShow) {
      startFromNumber = 1;
      pagesToShow = totalPages;
    } else {
      if (currentPage <= Math.ceil(pagesToShow / 2)) {
        startFromNumber = 1;
      } else if (
        currentPage + Math.floor((pagesToShow - 1) / 2) >=
        totalPages
      ) {
        startFromNumber = totalPages - (pagesToShow - 1);
      } else {
        startFromNumber = currentPage - Math.floor(pagesToShow / 2);
      }
    }

    for (let i = 1; i <= pagesToShow; i++) {
      pages.push(startFromNumber++);
    }

    return {
      currentPage,
      totalPages,
      pages
    };
  }

  render() {
    let { totalRecords , totalPages} = this.state;
    if (!totalRecords || totalPages === 1) return null;
    let pager = this.getPager();
    return (
      <ul className="pagination">
        <li className="page-item"
          disabled={pager.currentPage === 1 ? true : false}
          onClick={() => this.setPage(1)}
        >
          <Link to="#" className="page-link"><i className="fa fa-angle-double-left" aria-hidden="true"></i></Link>
        </li>
        <li className="page-item"
          disabled={pager.currentPage === 1 ? true : false}
          onClick={() => this.setPage(pager.currentPage - 1)}
        >
           <Link to="#" className="page-link"><i className="fa fa-angle-left" aria-hidden="true"></i></Link>
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={pager.currentPage === page ? "page-item active" : "page-item"}
            onClick={() => this.setPage(page)}
          >
             <Link to="#" className="page-link"> {page}</Link>
          </li>
        ))}
        <li className="page-item"
          disabled={pager.currentPage === pager.totalPages ? true : false}
          onClick={() => this.setPage(pager.currentPage + 1)}
        >
           <Link to="#" className="page-link"><i className="fa fa-angle-right" aria-hidden="true"></i></Link>
        </li>
        <li className="page-item"
          disabled={pager.currentPage === pager.totalPages ? true : false}
          onClick={() => this.setPage(pager.totalPages)}
        >
           <Link to="#" className="page-link"><i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
        </li>
      </ul>
    );
  }
}

PaginationPage.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  initialPage: PropTypes.number,
  pagesToShow: PropTypes.number,
  onChangePage: PropTypes.func
};

export default PaginationPage;