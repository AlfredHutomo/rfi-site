import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconTextTile.module.scss';
import { Icon } from '@mui/material';

import ReactMarkdown from 'react-markdown';

const IconTextTile = (props) => {
    const { icon, heading } = props;

    return (
        <div className={styles['icon-text-tile-wrapper']}>
            {props.icon != null ? (
                <div className={styles['icon-text-tile-icon']}>
                    <Icon>{props.icon}</Icon>
                </div>
            ) : (
                ''
            )}
            {props.heading != null ? (
                <h2 className={'h2 ' + styles['icon-text-tile-heading']}>
                    {props.heading}
                </h2>
            ) : (
                ''
            )}
            {props.children != null ? (
                <div className={styles['icon-text-tile-content']}>
                    <ReactMarkdown>{props.children}</ReactMarkdown>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

IconTextTile.propTypes = {};

export default IconTextTile;
