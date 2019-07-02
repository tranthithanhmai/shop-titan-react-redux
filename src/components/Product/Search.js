import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actSearch } from './../../actions/index';

class SearchControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch: ''
    }
  }

  onClickSearch = () => {
    this.props.actions.actSearch(this.state.strSearch);
  }

  onClickClear = () => {
    this.setState({
      strSearch: ""
    });
    this.props.actions.actSearch("");
  }

  handleChange = (event) => {
    this.setState({ strSearch: event.target.value });
  }

  render() {
    let { strSearch } = this.state;

    strSearch = strSearch ? strSearch : this.props.strSearch;

    return (
      <Fragment>
        <div className="col-sm-5">
          <div className="search-box">
            <input value={strSearch} onChange={this.handleChange} type="text" className="form-control" placeholder="Search for..." />
            <button className="search-btn" type="button" onClick={this.onClickSearch}><i className="fa fa-search" /></button>
          </div>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-default btn-round" onClick={this.onClickClear} type="button">Clear</button>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    strSearch: state.strSearch
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actSearch
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchControl);