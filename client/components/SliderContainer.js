import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Slider, { Range } from 'rc-slider';
import { setFilter } from '../actions/images';
import '../../node_modules/rc-slider/assets/index.css';

@connect(({ images }) => ({ filter: images.filter }), { setFilter })
class SliderContainer extends Component {
  constructor() {
    super();
    this.setFilter = this.setFilter.bind(this);
  }
  setFilter(result) {
    if (result === 0) {
      this.props.setFilter(result, false);
    } else {
      this.props.setFilter(result, true);
    }
  }
  render() {
    return (
      <div>
        <Slider step={10} max={3000} onChange={this.setFilter} />
        <p>
          {`Current Filter: ${this.props.filter}`}
        </p>
      </div>
    );
  }
}

SliderContainer.propTypes = {
  setFilter: PropTypes.string,
  filter: PropTypes.number
}

export default SliderContainer;
