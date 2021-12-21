import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './USPBanner.module.scss';

import Button from '../global/Button';
import USPBlock from './USPBlock';

const USPBanner = (props) => {
    const { data, offsetPos } = props;

    const offset = (props.offsetPos) ? ' ' + styles['usp-banner-offset'] : '';

    return (
        <div className={styles['usp-banner-wrapper'] + offset}>
            {props.data != null && props.data.length != 0
                ? props.data.map((usp, i) => (
                      <USPBlock key={i} icon={usp['icon']}>
                          {usp['description']}
                      </USPBlock>
                  ))
                : ''}
        </div>
    );
};

USPBanner.defaultProps = {
    data: null,
};

USPBanner.propTypes = {
    //data: PropTypes.object,
};

export default USPBanner;

