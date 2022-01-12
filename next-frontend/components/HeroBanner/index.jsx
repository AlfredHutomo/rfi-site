import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './HeroBanner.module.scss';

import DefaultImg from './default-img-home.jpg';
import DefaultImgMobile from './default-img-mobile-home.jpg';
import DefaultImg1 from './default-img-program.jpg';
import DefaultImgMobile1 from './default-img-mobile-program.jpg';

import Button from '../global/Button';

const HeroBanner = (props) => {
    const {
        isContentOnRight,
        imageDesktop,
        imageMobile,
        heading,
        button1Text,
        button1Link,
        button2Text,
        button2Link,
    } = props;

    return (
        <div className={styles['hero-banner-wrapper']}>
            <div className={`${styles['hero-banner']} ${isContentOnRight ? styles['alignRight'] : ''}`}>
                <div className={styles['hero-banner-content']}>
                    {props.heading != null ? (
                        <h1 className={styles['hero-banner-heading']}>
                            {props.heading}
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
                    {props.button1Text != null && props.button1Link != null ? (
                        <Button
                            variant='4'
                            //size='large'
                            className={styles['hero-banner-button']}
                            to={props.button1Link}
                        >
                            {props.button1Text}
                        </Button>
                    ) : (
                        ''
                    )}
                    {props.button2Text != null && props.button2Link != null ? (
                        <Button
                            variant='1'
                            //size='large'
                            className={styles['hero-banner-button']}
                            to={props.button2Link}
                        >
                            {props.button2Text}
                        </Button>
                    ) : (
                        ''
                    )}
                </div>
            </div>

            <div className={styles['hero-banner-img']}>
                {props.imageDesktop != null ? (
                    <div className="desktop-only">
                        <Image
                            src={props.imageDesktop}
                            layout='fill'
                            objectFit='cover'
                            alt={''}
                        />
                    </div>
                ) : (
                    <div className="desktop-only">
                        <Image src={props.isContentOnRight ? DefaultImg1 : DefaultImg} alt={''} />
                    </div>
                )}
                {props.imageMobile != null ? (
                    <div className="mobile-only">
                        <Image
                            src={props.imageMobile}
                            layout='fill'
                            objectFit='cover'
                            alt={''}
                        />
                    </div>
                ) : (
                    <div className="mobile-only">
                        <Image src={props.isContentOnRight ? DefaultImgMobile1 : DefaultImgMobile} alt={''} />
                    </div>
                )}
            </div>
        </div>
    );
};

HeroBanner.propTypes = {};

export default HeroBanner;
