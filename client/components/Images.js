import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import '../css/image.css';

export class Images extends Component {
  render() {
    return (
      <div className="images">
        { this.props.list.map((item, index) => (<Image key={index} {...item.data} />)) }
      </div>
    );
  }
}

Images.propTypes = {
  list: PropTypes.array
}

export default Images;
