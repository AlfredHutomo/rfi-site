import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorDetailBlock.module.scss';
import Link from 'next/link';


const SponsorGold = (props) => {
    const {
        logo,
        name,
        phone,
        email,
        social,
    } = props;

    return (
        <div className={styles['sponsor-detail-block-gold']}>
            <div className={styles['sponsor-detail-block-gold-logo']}>
                {
                    (props.logo != null) ? (
                        <Image
                            src={props.logo}
                            alt={props.name}
                            layout='fill'
                            objectFit='contain'
                        />
                    ) : (
                        <Image
                            src={
                                'https://source.unsplash.com/random/220x220'
                            }
                            alt={props.name}
                            layout='fill'
                            objectFit='contain'
                        />
                    )
                }
            </div>

            <div className={styles['sponsor-detail-block-gold-info']}>
                {
                    (props.name != null) ?
                    <h3 className="h3">
                        {props.name}
                    </h3> : ''
                }
                {
                    (props.name != null) ?
                    <p>
                        {props.phone}
                    </p> : ''
                }
                {
                    (props.name != null) ?
                    <p>
                        <Link href={'mailto:'+props.email} passHref={true}>
                            {props.email}
                        </Link>

                    </p> : ''
                }
                {
                    (props.social != null) ?
                    <h3 className="h3">
                        {props.social}
                    </h3> : ''
                }
            </div>
        </div>
    );
};

SponsorGold.propTypes = {};

export default SponsorGold;

