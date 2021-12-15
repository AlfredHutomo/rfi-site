import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './button.module.scss';

/**
 * Button component
 */
const Button = (props) => {
    const { to, className, onClick, variant, size, isExternalLink, ...others } =
        props;
    const Wrapper = to == null ? 'button' : 'a';

    const attributes = {
        className: clsx(
            styles['button'],
            [
                size === 'large' && styles['button--lg'],
                size === 'small' && styles['button--sm'],
            ],
            [
                variant == '1' && styles['button--alt-01'],
                variant == '2' && styles['button--alt-02'],
                variant == '3' && styles['button--alt-03'],
                variant == '4' && styles['button--alt-04'],
                variant == '5' && styles['button--alt-05'],
            ],
            className
        ),
        onClick: onClick
            ? (e) => {
                  onClick(e);
              }
            : null,
        ...others,
    };

    if (!props.isExternalLink && to && to[0] !== '#') {
        return (
            <Link href={to} passHref={to}>
                <Wrapper {...attributes} />
            </Link>
        );
    } else {
        return <Wrapper href={to} {...attributes} />;
    }
};

/* default properties */
Button.defaultProps = {
    isExternalLink: false,
};

/* Button proptypes */
Button.propTypes = {
    // href to be passed if the button is a link
    to: PropTypes.string,
    // classes for the component
    className: PropTypes.string,
    // on click handler if there's any
    onClick: PropTypes.func,
    // styling variant for the button
    variant: PropTypes.string,
    // button size style
    size: PropTypes.string,
    // flag if button have a link to external site
    isExternalLink: PropTypes.bool,
};

export default Button;
