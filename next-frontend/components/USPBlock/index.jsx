import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './USPBlock.module.scss';

import Button from '../global/Button';

const USPBlock = (props) => {

    const {
        icon
    } = props;


    return (
        <div className={styles['usp-block-wrapper']}>
            {
                (props.icon != null) ?
                <div className={styles['usp-block-icon']}>
                    {props.icon}
                </div> : ''
            }
            {
                (props.children != null) ?
                <h5 className={styles['usp-block-content']}>
                    {props.children}
                </h5> : ''
            }
        </div>
    );
}

USPBlock.propTypes = {
}

export default USPBlock;

