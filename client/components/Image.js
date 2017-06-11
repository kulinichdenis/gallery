import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { name, url, num_comments, permalink } = this.props; 
    return (
      <div className="image">
        <h3>{name}</h3>
        <img src={url} alt="" width="200" height="200" />
        <div>{`Comments: ${num_comments}`}</div>
        <a href={permalink}>Link</a>
      </div>
    );
  }
};

Image.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  num_comments: PropTypes.number, 
  permalink: PropTypes.string,
};

export default Image;

