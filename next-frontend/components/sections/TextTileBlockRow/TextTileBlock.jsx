import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextTileBlockRow.module.scss';

const TextTileBlock = (props) => {
    const { heading } = props;

    return (
        <div className={styles['text-tile-block-wrapper']}>
            {props.heading != null ? (
                <h2 className={'h2 ' + styles['text-tile-block-heading']}>{props.heading}</h2>
            ) : (
                ''
            )}
            {props.children != null ? (
                <div className={styles['text-tile-block-content']}>
                    {props.children}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

TextTileBlock.propTypes = {};

export default TextTileBlock;

