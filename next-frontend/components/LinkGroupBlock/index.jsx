import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './LinkGroupBlock.module.scss';

import Button from '../global/Button';
import USPBlock from '../USPBlock';

const LinkGroupBlock = (props) => {

    const {
        data,
    } = props;


    return (
        <div className={styles['usp-banner-wrapper']}>
        </div>
    );
}

LinkGroupBlock.defaultProps = {
    data: null
}

LinkGroupBlock.propTypes = {
    data: PropTypes.object,
}

export default LinkGroupBlock;

