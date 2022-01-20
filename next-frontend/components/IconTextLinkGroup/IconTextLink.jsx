import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconTextLinkGroup.module.scss';

import { Icon } from '@mui/material';
import Link from 'next/link';

const IconTextLink = (props) => {
    const { icon, heading, linkText, linkUrl, children } = props;

    return (
        <div className={styles['link-group-block-item-wrapper']}>
            {icon != null ? (
                <div className={styles['link-group-block-item-icon']}>
                    <Icon>{icon}</Icon>
                </div>
            ) : (
                ''
            )}
            {heading != null ? (
                <h3 className={'h3 ' + styles['link-group-block-item-heading']}>
                    {heading}
                </h3>
            ) : (
                ''
            )}
            {children != null ? (
                <div className={styles['link-group-block-item-content']}>
                    {children}
                </div>
            ) : (
                ''
            )}
            {linkText != null ? (
                <a className={styles['link-group-block-item-link']}>
                    {linkText}
                </a>
            ) : (
                ''
            )}
        </div>
    );
};

IconTextLink.propTypes = {};

export default IconTextLink;
