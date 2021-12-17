import React from 'react';
import PropTypes from 'prop-types';

import styles from './TextTileBlockRow.module.scss';

const TextTileBlock = (props) => {

    const {
        heading
    } = props;

    return (
        <div className={styles['text-block-wrapper']}>
            {
                (props.heading != null) ?
                <h1 className="h1">
                    {props.heading}
                </h1> : ''
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

TextTileBlock.propTypes = {
}




const TextTileBlockRow = (props) => {

    const {
        data,
    } = props;


    return (
        <div className={styles['text-tile-blocks-wrapper']}>
            {
                (props.data != null && props.data.length != 0) ?
                    props.data.map((block, i) => (
                        <TextTileBlock
                            key={i}
                            heading={block['heading']}
                        >
                        {
                            (props.children != null) ? props.children : ''
                        }
                        </TextTileBlock>
                    )) : ''
            }
        </div>
    );
}

TextTileBlockRow.propTypes = {

}

TextTileBlockRow.defaultProps = {
    data: null,
}

export {
    TextTileBlock,
    LinkGroupBlockRow,
}

