import React from 'react';
import PropTypes from 'prop-types';

import styles from './LinkGroupBlock.module.scss';

const LinkGroupBlock = (props) => {

    const {
        icon,
        heading,
        linkText,
        linkUrl,
    } = props;


    return (
        <div className={styles['link-group-block-item-wrapper']}>
            {
                (props.icon != null) ?
                <div className={styles['link-group-block-item-icon']}>
                    {props.icon}
                </div> : ''
            }
            {
                (props.heading != null) ?
                <h3 className={'h3 ' + styles['link-group-block-item-heading']}>
                    {props.heading}
                </h3> : ''
            }
            {
                (props.children != null) ?
                <div className={styles['link-group-block-item-content']}>
                    {props.children}
                </div> : ''
            }
            {
                (props.linkText != null) ?
                <a className={styles['link-group-block-item-link']}>
                    {props.linkText}
                </a> : ''
            }
        </div>
    );
}

LinkGroupBlock.propTypes = {
}

export default LinkGroupBlock;

