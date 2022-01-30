import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorDetailBlock.module.scss';
import Link from 'next/link';

import { Icon } from '@mui/material';

const SponsorGold = (props) => {
    const { data, logo, name, phone, email, social } = props;

    return (
        <div className={styles['sponsor-detail-block-gold']}>
            <div className={styles['sponsor-detail-block-gold-logo']}>
                {data.attributes.logo.data.attributes.url != null ? (
                    <Image
                        src={data.attributes.logo.data.attributes.url}
                        alt={data.attributes.name}
                        layout='fill'
                        objectFit='contain'
                    />
                ) : (
                    <Image
                        src={'https://source.unsplash.com/random/220x220'}
                        alt=''
                        layout='fill'
                        objectFit='contain'
                    />
                )}
            </div>

            <div className={styles['sponsor-detail-block-gold-info']}>
                {data.attributes.name != null ? (
                    <h3 className='h3'>{data.attributes.name} </h3>
                ) : (
                    ''
                )}
                {data.attributes.phone != null ? (
                    <p>{data.attributes.phone}</p>
                ) : (
                    ''
                )}
                {data.attributes.email != null ? (
                    <p>
                        <Link
                            href={'mailto:' + data.attributes.email}
                            passHref={true}
                        >
                            {data.attributes.email}
                        </Link>
                    </p>
                ) : (
                    ''
                )}
                {data.attributes.social != null &&
                data.attributes.social.length != 0 ? (
                    <>
                        {data.attributes.social.map((item, i) => (
                            <Icon key={i}>{item.platform}</Icon>
                        ))}
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

SponsorGold.propTypes = {};

export default SponsorGold;
