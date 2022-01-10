import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CardContent.module.scss';

/**
 * CardContent
 * wrapper component to be used along with card component to wrap around
 * Card component content
 */
const CardContent = (props) => {
    const {
        element,
        compact,
        spaced,
        className,
        ...others
    } = props;

    const RootElement = element == null ? 'div' : element;
    const classes = clsx(
        styles['card-content'],
        compact && styles['card-content--compact'],
        spaced && styles['card-content--spaced'],
        className,
    );

    return <RootElement className={classes} {...others} />
};

/* CardContent default props */
CardContent.defaultProps = {
    compact: false,
    spaced: false,
}

/* CardContent Prop Types */
CardContent.propTypes = {
    /* element to be used as root element for CardMedia
    * by default is using figure element */
    element: PropTypes.string,
    // boolean flag for compact CardContent styling
    compact: PropTypes.bool,
    // boolean flag for spaced CardContent styling
    spaced: PropTypes.bool,
}

export default CardContent;
