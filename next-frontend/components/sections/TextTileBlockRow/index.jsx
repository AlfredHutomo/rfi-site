import React from 'react';
import PropTypes from 'prop-types';

import TextTileBlock from './TextTileBlock';

import styles from './TextTileBlockRow.module.scss';
import SectionWrapper from '../../global/SectionWrapper';

const TextTileBlockRow = (props) => {
    const { offsetPos, tiles } = props.sectionData;

    const offset = offsetPos ? ' ' + styles['text-tile-blocks-offset'] : '';

    return (
        <SectionWrapper options={props.wrapperOptions}>
            <div className={styles['text-tile-blocks-wrapper'] + offset}>
                {tiles != null && tiles?.length != 0
                    ? tiles.map((block, i) => (
                          <TextTileBlock key={i} heading={block.heading}>
                              {block.description != null
                                  ? block.description
                                  : ''}
                          </TextTileBlock>
                      ))
                    : ''}
            </div>
        </SectionWrapper>
    );
};

TextTileBlockRow.propTypes = {
    sectionData: PropTypes.object,
    wrapperOptions: PropTypes.object,
};

TextTileBlockRow.defaultProps = {
    sectionData: {},
    wrapperOptions: {},
};

export default TextTileBlockRow;
