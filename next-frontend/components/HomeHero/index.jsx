import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './HomeHero.module.scss';
import DefaultImg from './default-img.jpg';

import Button from '../global/Button';

const HomeHero = (props) => {
    const {
        image,
        heading,
        button1Text,
        button1Link,
        button2Text,
        button2Link,
    } = props;

    return (
        <div className={styles['hero-banner-wrapper']}>
            <div className={styles['hero-banner']}>
                <div className={styles['hero-banner-content']}>
                    {props.children != null ? (
                        <h1 className={styles['hero-banner-heading']}>
                            {props.children}
                        </h1>
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
                {props.image != null ? (
                    <Image
                        src={props.image}
                        layout='fill'
                        objectFit='cover'
                        alt={''}
                    />
                ) : (
                    <Image src={DefaultImg} alt={''} />
                )}
            </div>
        </div>
    );
};

HomeHero.propTypes = {};

export default HomeHero;
