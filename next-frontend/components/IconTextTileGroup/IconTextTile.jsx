import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconTextTile.module.scss';

const IconTextTile = (props) => {

    const {
        icon,
        heading,
    } = props;


    return (
        <div className={styles['icon-text-tile-wrapper']}>
            {
                (props.icon != null) ?
                <div className={styles['icon-text-tile-icon']}>
                    {props.icon}
                </div> : ''
            }
            {
                (props.heading != null) ?
                <h2 className={'h2 ' + styles['icon-text-tile-heading']}>
                    {props.heading}
                </h2> : ''
            }
            {
                (props.children != null) ?
                <div className={styles['icon-text-tile-content']}>
                    {props.children}
                </div> : ''
            }
        </div>
    );
}

IconTextTile.propTypes = {
}

export default IconTextTile;

