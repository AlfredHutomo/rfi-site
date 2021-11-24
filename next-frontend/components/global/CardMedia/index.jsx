import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CardMedia.module.scss';

/**
 * CardContent
 * wrapper component to be used along with card component to wrap around
 * Card component image or media content
 */
const CardMedia = (props) => {
  const {
      element,
      spaced,
      contain,
      className,
      ...others
  } = props;

  const RootElement = element == null ? 'figure' : element;
  const classes = clsx(
    styles['card-media'],
    spaced && styles['card-media--spaced'],
    contain && styles['card-media--contain'],
    className,
  );

  return <RootElement className={classes} {...others} />
};

/* CardMedia default props */
CardMedia.defaultProps = {
  spaced: false,
  contain: false,
}

/* CardMedia Prop Types */
CardMedia.propTypes = {
  /* element to be used as root element for CardMedia
   * by default is using figure element */
  element: PropTypes.string,
  // boolean flag for spaced styling
  spaced: PropTypes.bool,
  // boolean flag for contained image styling
  contain: PropTypes.bool,
}

export default CardMedia;
