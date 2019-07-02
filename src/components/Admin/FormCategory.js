import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  actAddCategoryRequest,
  actGetCategoryRequest,
  actUpdateCategoryRequest,
  actAddImagesRequest,
  actGoAdminItem
} from './../../actions/index';
import { isEmpty } from 'lodash';

class FormCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtSlug: ""
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match.params.id) {
      const id = match.params.id;
      this.props.actions.actGetCategoryRequest(id);
      this.props.actions.actGoAdminItem('Edit', `/shopping-cart-reactjs/admin/eidt-category/${id}`);
    } else {
      this.props.actions.actGoAdminItem('Add', '/shopping-cart-reactjs/admin/add-category');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      let { itemEditing } = nextProps;
      if (!isEmpty(itemEditing)) {
        this.setState({
          id: itemEditing.id,
          txtName: itemEditing.name,
          txtSlug: itemEditing.slug
        });
      }
    }
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  onClickSubmit = async (e) => {
    e.preventDefault();
    let {
      id,
      txtName,
      txtSlug
    } = this.state;
    let { history } = this.props;
    let category = {
      id: id,
      name: txtName,
      slug: txtSlug
    }
    if (id) {
      await this.props.actions.actUpdateCategoryRequest(category);
    } else {
      await this.props.actions.actAddCategoryRequest(category);
    }

    history.goBack();
  }

  onClickBack = () => {
    let { history } = this.props;
    history.goBack();
  }

  render() {
    let {
      txtName,
      txtSlug
    } = this.state;
    return (
      <section className="module">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h2 className="module-title font-alt">FORM CONTROL</h2>
              <div className="module-subtitle font-serif" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <form onSubmit={this.onClickSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Category Name"
                    name='txtName'
                    value={txtName}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="slug">Slug</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Slug Name"
                    name='txtSlug'
                    value={txtSlug}
                    onChange={this.onChange}
                  />
                </div>
                <div className="text-center">
                  <button className="btn btn-primary btn-round btn-block" to="/shopping-cart-reactjs/admin/" type="submit">Submit</button>
                  <button className="btn btn-g btn-round btn-block" type="button" onClick={this.onClickBack}>Back</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actAddCategoryRequest,
      actGetCategoryRequest,
      actUpdateCategoryRequest,
      actAddImagesRequest,
      actGoAdminItem
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormCategory);