import React from 'react';
import PropTypes from 'prop-types';

import TextTileBlock from './TextTileBlock';

import styles from './TextTileBlockRow.module.scss';

const TextTileBlockRow = (props) => {
    const { data } = props;

    const offset = (props.offsetPos) ? ' ' + styles['text-tile-blocks-offset'] : '';

    return (
        <div className={styles['text-tile-blocks-wrapper'] + offset}>
            {props.data != null && props.data.length != 0
                ? props.data.map((block, i) => (
                      <TextTileBlock key={i} heading={block.heading}>
                          {block.content != null ? block.content : ''}
                      </TextTileBlock>
                  ))
                : ''}
        </div>
    );
};

TextTileBlockRow.propTypes = {};

TextTileBlockRow.defaultProps = {
    data: null,
};

export default TextTileBlockRow;

