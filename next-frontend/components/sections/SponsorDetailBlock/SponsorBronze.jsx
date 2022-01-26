import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorDetailBlock.module.scss';
import Link from 'next/link';

const SponsorBronze = (props) => {
    const { data, logo, name, website, phone, email, social } = props;

    return (
        <div className={styles['sponsor-detail-block-bronze']}>
            <div className={styles['sponsor-detail-block-bronze-logo']}>
                {props.logo != null ? (
                    <Image
                        src={props.logo}
                        alt={props.name}
                        layout='fill'
                        objectFit='contain'
                    />
                ) : (
                    <Image
                        src={'https://source.unsplash.com/random/150x70'}
                        alt={props.name}
                        layout='fill'
                        objectFit='contain'
                    />
                )}
            </div>

            <div className={styles['sponsor-detail-block-bronze-info']}>
                {data.attributes.name != null ? (
                    <h6 className='h6'>{data.attributes.name}</h6>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

SponsorBronze.propTypes = {};

export default SponsorBronze;
