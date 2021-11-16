import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = (props) => {
  const { to, className, onClick, variant, size} = props;

  let variantClass = '';

  switch (variant) {
    case '1':
      variantClass = 'button--alt-01';
      break;
    case '2':
      variantClass = 'button--alt-02';
      break;
    case '3':
      variantClass = 'button--alt-03';
      break;
    case '4':
      variantClass = 'button--alt-04';
      break;
    case '5':
      variantClass = 'button--alt-05';
      break;
    default:
      break;
  }

  const attributes = {
    href: to ? to : null,
    className : `${styles['button']} ${styles[variantClass]} ${className ? $className : ''} ${size =='large' ? styles['button--lg'] : ''}`,
    onClick: onClick ? (e) => { onClick(e) }: null
  }

  if (props.to) {
    return (
      <a {...attributes} >
        {props.children}
      </a>
    );
  } else {
    return (
      <button {...attributes}>
        {props.children}
      </button>
    );
  }
}

Button.propTypes = {}

export default Button;
