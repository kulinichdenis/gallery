import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Images from './Images';
import EmptyFilter from './EmptyFilter';

class FilterImages extends Component {
  constructor() {
    super();
    this.filterImages = this.filterImages.bind(this);
  }
  filterImages(data, filter) {
    const result = data.filter((item) => (item.data.num_comments > filter));
    return result.length > 0 ?  <Images list={result} /> : <EmptyFilter />
  }
  render() {
    const { data, filter } = this.props.images;
    if (filter) {
      return this.filterImages(data, filter);
    }
    return (
      <div>
        <Images list={data} />
      </div>
    );
  }
}

FilterImages.propTypes = {
  images: PropTypes.shape({
    data: PropTypes.array,
    filter: PropTypes.number
  })
};

export default FilterImages;
