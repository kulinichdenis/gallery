import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SliderContainer from './SliderContainer';
import Spinner from './Spinner';
import FilterImages from './FilterImages';
import SortImages from './SortImages';
import { fetchImages } from '../actions/images';
import '../css/main.css';


@connect(({ images, spinner }) => ({ images, spinner }), { fetchImages })
class App extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }
  render() {
    const { images, spinner } = this.props;
    return (
      <div className="main">
        <SliderContainer />
        <SortImages />
        { spinner &&
          <Spinner />
        }
        { !spinner &&
          <div>
            <h1>{images.kind}</h1>
            <FilterImages images={images} />
          </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  images: PropTypes.object,
  spinner: PropTypes.bool,
  fetchImages: PropTypes.func
};

export default App;

