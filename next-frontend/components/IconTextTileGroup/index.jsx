import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconTextTile.module.scss';
import IconTextTile from './IconTextTile';

const IconTextTileGroup = (props) => {

    const {
        data
    } = props;


    return (
        <div className={styles['icon-text-tile-group-wrapper']}>
            {
                (props.data != null && props.data.length != 0) ?
                    props.data.map((item, i) => (
                        <IconTextTile
                            key={i}
                            icon={item['icon']}
                            heading={item['heading']}
                        >
                            {item['content']}
                        </IconTextTile>
                    )) : ''
            }
        </div>
    );
}

IconTextTileGroup.propTypes = {
}

export default IconTextTileGroup;

