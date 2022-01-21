import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconTextTile.module.scss';
import IconTextTile from './IconTextTile';
import SectionWrapper from '../global/SectionWrapper';

const IconTextTileGroup = ({ sectionData, wrapperOptions }) => {
    const { tiles } = sectionData;

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['icon-text-tile-group-wrapper']}>
                {tiles != null && tiles.length != 0
                    ? tiles.map((item, i) => (
                          <IconTextTile
                              key={i}
                              icon={item['icon']}
                              heading={item['heading']}
                          >
                              {item['description']}
                          </IconTextTile>
                      ))
                    : ''}
            </div>
        </SectionWrapper>
    );
};

IconTextTileGroup.propTypes = {};

export default IconTextTileGroup;
