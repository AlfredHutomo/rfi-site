import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './USPBanner.module.scss';

import Button from '../global/Button';

import { Icon } from '@mui/material';

const USPBlock = (props) => {
    const { icon } = props;

    return (
        <div className={styles['usp-block-wrapper']}>
            {props.icon != null ? (
                <div className={styles['usp-block-icon']}>
                    <Icon className={styles['usp-block-icon-mui']}>{props.icon}</Icon>
                </div>
            ) : (
                ''
            )}
            {props.children != null ? (
                <h5 className={'h5 ' + styles['usp-block-content']}>
                    {props.children}
                </h5>
            ) : (
                ''
            )}
        </div>
    );
};

USPBlock.propTypes = {};

export default USPBlock;
