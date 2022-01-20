import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './USPBanner.module.scss';

import Button from '../global/Button';
import SectionWrapper from '../global/SectionWrapper';
import USPBlock from './USPBlock';

const USPBanner = (props) => {
    const { data, offsetPos, wrapperOptions } = props;

    const offset = offsetPos ? ' ' + styles['usp-banner-offset'] : '';

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['usp-banner-wrapper'] + offset}>
                {data != null && data.length != 0
                    ? data.map((usp, i) => (
                          <USPBlock key={i} icon={usp['icon']}>
                              {usp['description']}
                          </USPBlock>
                      ))
                    : ''}
            </div>
        </SectionWrapper>
    );
};

USPBanner.defaultProps = {
    data: null,
};

USPBanner.propTypes = {
    //data: PropTypes.object,
};

export default USPBanner;
