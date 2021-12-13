import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './TextBlock.module.scss';

import Button from '../global/Button';

const TextBlock = (props) => {

    const {
        h1,
        h2,
        h3,
        h4,
        maxWidth
    } = props;

    return (
        <div className={styles['text-block-wrapper']} style={(props.maxWidth != null) ? {maxWidth: props.maxWidth + 'px'} : {maxWidth: props.maxWidth}}>
            {
                (props.h1 != null) ?
                <h1 className="h1">
                    {props.h1}
                </h1> : ''
            }
            {
                (props.h2 != null) ?
                <h2 className="h2">
                    {props.h2}
                </h2> : ''
            }
            {
                (props.h3 != null) ?
                <h3 className="h3">
                    {props.h3}
                </h3> : ''
            }
            {
                (props.h4 != null) ?
                <h4 className="h4">
                    {props.h4}
                </h4> : ''
            }
            {
                (props.children != null) ?
                <div className={styles['text-block-content']}>
                    {props.children}
                </div> : ''
            }
        </div>
    );
}

TextBlock.propTypes = {
}

TextBlock.defaultProps = {
    maxWidth: 730
}

export default TextBlock;

