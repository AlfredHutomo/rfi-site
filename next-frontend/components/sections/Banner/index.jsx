import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import SectionWrapper from '../../global/SectionWrapper';
import styles from './Banner.module.scss';
import DefaultImg from './default-img.jpg';
import DefaultIcon from './default-icon.svg';

const Banner = (props) => {
    const { icon, image, heading, description } = props.sectionData;

    console.log(props.sectionData, 'Banner sectionData');

    return (
        <div className={styles['banner-wrapper']}>
            {icon?.data != null || heading != null || description != null ? (
                <>
                    <SectionWrapper>
                        <div className={styles['banner']}>
                            {icon?.data != null ? (
                                <div className={styles['banner-icon']}>
                                    <Image
                                        width='90'
                                        height='90'
                                        layout='fixed'
                                        src={icon.data.attributes.url}
                                        alt={''}
                                    />
                                </div>
                            ) : (
                                <div className={styles['banner-icon']}>
                                    <Image
                                        width='90'
                                        height='90'
                                        layout='fixed'
                                        src={DefaultIcon}
                                        alt={''}
                                    />
                                </div>
                            )}
                            {heading != null ? (
                                <h2
                                    className={'h2 ' + styles['banner-heading']}
                                >
                                    {heading}
                                </h2>
                            ) : (
                                ''
                            )}
                            {description != null ? (
                                <div className={styles['banner-content']}>
                                    {description}
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    </SectionWrapper>
                    <Image
                        src={
                            image?.data != null
                                ? image.data.attributes.url
                                : DefaultImg
                        }
                        layout='fill'
                        objectFit='cover'
                        alt={''}
                    />
                </>
            ) : (
                <Image
                    layout='responsive'
                    className={styles['banner-content-image']}
                    src={
                        image?.data != null
                            ? image.data.attributes.url
                            : DefaultImg
                    }
                    width={
                        image?.data != null
                            ? image.data.attributes.width
                            : '1440'
                    }
                    height={
                        image?.data != null
                            ? image.data.attributes.height
                            : '570'
                    }
                    alt={''}
                />
            )}
        </div>
    );
};

Banner.propTypes = {};

export default Banner;
