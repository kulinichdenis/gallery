import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { sortImagesByAsc, sortImagesByDesc } from '../actions/images';


@connect(null, { sortImagesByAsc, sortImagesByDesc })
class SortImages extends Component {  
  constructor() {
    super();
    this.sortByAsc = this.sortByAsc.bind(this);
    this.sortByDesc = this.sortByDesc.bind(this);
  }
  sortByAsc() {
    this.props.sortImagesByAsc();
  }
  sortByDesc() {
    this.props.sortImagesByDesc();
  }
  render() {
    return (
      <div>
        <Button bsStyle="primary" onClick={this.sortByAsc}>Sort by asc</Button>
        <Button bsStyle="primary" onClick={this.sortByDesc}>Sort by desc</Button>
      </div>
    );
  }
}

SortImages.propTypes = {
  sortImagesByDesc: PropTypes.func,
  sortImagesByAsc: PropTypes.func
};

export default SortImages;
