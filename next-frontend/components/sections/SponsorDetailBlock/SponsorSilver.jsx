import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorDetailBlock.module.scss';
import Link from 'next/link';

const SponsorSilver = (props) => {
    const { data, logo, name, phone, email, social } = props;

    return (
        <div className={styles['sponsor-detail-block-silver']}>
            <div className={styles['sponsor-detail-block-silver-info']}>
                {data.attributes.name != null ? (
                    <h4 className={'h4 ' + styles['sponsor-detail-block-heading']}>{data.attributes.name}</h4>
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
                {props.social != null ? (
                    <h3 className='h3'>{props.social}</h3>
                ) : (
                    ''
                )}
            </div>

            <div className={styles['sponsor-detail-block-silver-logo']}>
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
        </div>
    );
};

SponsorSilver.propTypes = {};

export default SponsorSilver;
