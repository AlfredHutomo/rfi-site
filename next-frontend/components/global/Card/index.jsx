import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Card.module.scss';

/**
 * Card
 * a wrapper component to emphasise content or a section
 */
const Card = (props) => {
  const { element, className, horizontal, horizontalReverse, ...others } = props;

  const RootElement = element == null ? 'div' : element;
  const classes = clsx(
    styles['card'],
    horizontal && styles['card--horizontal'],
    horizontalReverse && styles['card--horizontal-reverse'],
    className,
  );

  return <RootElement className={classes} {...others} />
};

/* Card default props */
Card.defaultProps = {
  horizontal: false
}

/* Card Prop Types */
Card.propTypes = {
  element: PropTypes.string,
  horizontal: PropTypes.bool
}

export default Card;
