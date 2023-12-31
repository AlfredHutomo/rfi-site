import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './HeroBanner.module.scss';

import DefaultImg from './default-img-home.jpg';
import DefaultImgMobile from './default-img-mobile-home.jpg';
import DefaultImg1 from './default-img-program.jpg';
import DefaultImgMobile1 from './default-img-mobile-program.jpg';

import Button from '../../global/Button';
import { checkValidURL } from '../../../utils/utils';

const HeroBanner = (props) => {
    const {
        bgImageDesktop,
        bgImageMobile,
        heading,
        button1,
        button2,
        isContentOnRight,
    } = props.sectionData;

    return (
        <div className={styles['hero-banner-wrapper']}>
            <div
                className={`${styles['hero-banner']} ${
                    isContentOnRight ? styles['alignRight'] : ''
                }`}
            >
                <div className={styles['hero-banner-content']}>
                    {heading != null ? (
                        <h1 className={styles['hero-banner-heading']}>
                            {heading}
                        </h1>
                    ) : (
                        ''
                    )}
                    {props.children != null ? (
                        <h3 className={styles['hero-banner-post-heading']}>
                            {props.children}
                        </h3>
                    ) : (
                        ''
                    )}
                    {button1 != undefined && button1?.displayName != null ? (
                        <Button
                            variant='4'
                            //size='large'
                            className={styles['hero-banner-button']}
                            to={
                                button1.isExternalLink
                                   ? checkValidURL(button1.url)
                                   : checkValidURL(button1.page.data.attributes.url)
                            }
                        >
                            {button1.displayName}
                        </Button>
                    ) : (
                        ''
                    )}
                    {button2 != undefined && button2?.displayName != null ? (
                        <Button
                            variant='1'
                            //size='large'
                            className={styles['hero-banner-button']}
                            to={
                                button2.isExternalLink
                                   ? checkValidURL(button2.url)
                                   : checkValidURL(button2.page.data.attributes.url)
                            }
                        >
                            {button2.displayName}
                        </Button>
                    ) : (
                        ''
                    )}
                </div>
            </div>

            <div className={styles['hero-banner-img']}>
                {bgImageDesktop.data != null ? (
                    <div className='desktop-only'>
                        <Image
                            src={bgImageDesktop.data?.attributes.url}
                            width={bgImageDesktop.data?.attributes.width}
                            height={bgImageDesktop.data?.attributes.height}
                            alt={''}
                        />
                    </div>
                ) : (
                    <div className='desktop-only'>
                        <Image
                            src={isContentOnRight ? DefaultImg1 : DefaultImg}
                            alt={''}
                        />
                    </div>
                )}
                {bgImageMobile.data != null ? (
                    <div className='mobile-only'>
                        <Image
                            src={bgImageMobile.data?.attributes.url}
                            width={bgImageMobile.data?.attributes.width}
                            height={bgImageMobile.data?.attributes.height}
                            alt={''}
                        />
                    </div>
                ) : (
                    <div className='mobile-only'>
                        <Image
                            src={
                                isContentOnRight
                                    ? DefaultImgMobile1
                                    : DefaultImgMobile
                            }
                            alt={''}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

HeroBanner.propTypes = {
    sectionData: PropTypes.object,
};

export default HeroBanner;
