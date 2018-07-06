import React, { Component } from 'react';
import PropTypes from 'prop-types';
import icons from './icons/IconModule';

class Thumbnail extends Component {
  state = {
    imageSrc: ''
  };

  static propTypes = {
    src: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  componentDidMount() {
    const { src } = this.props;
    const img = new Image();
    img.src = src;

    this.setState({
      imageSrc: img.complete ? src : null
    });
  }

  render() {
    const { imageSrc } = this.state;

    return imageSrc ? 
      <img src={imageSrc} /> :
      <svg x="0px" y="0px" width="60px" height="60px" viewBox="0 0 60 60">
        {icons[this.props.icon]}
      </svg>
  }
}

export default Thumbnail;