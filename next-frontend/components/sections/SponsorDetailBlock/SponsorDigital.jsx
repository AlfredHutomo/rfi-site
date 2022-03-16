import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorDetailBlock.module.scss';
import Link from 'next/link';

const SponsorDigital = ({ data }) => {
    const { logo, name, website } = data.attributes;

    return (
        <div className={styles['sponsor-detail-block-digital']}>
            <div className={styles['sponsor-detail-block-digital-logo']}>
                {logo.data != null && (
                    <Image
                        src={logo.data.attributes.url}
                        alt={`${name} logo`}
                        layout='fill'
                        objectFit='contain'
                    />
                )}
            </div>
            <div className={styles['sponsor-detail-block-digital-info']}>
                {name != null ? <h6 className={'h6 ' + styles['sponsor-detail-block-heading']}>{name}</h6> : ''}
            </div>
        </div>
    );
};

SponsorBronze.propTypes = {};

export default SponsorBronze;
