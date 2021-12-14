import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorBlock.module.scss';

import Button from '../global/Button';

const SponsorBlock = (props) => {

    const {
        heading,
        sponsorGold,
        sponsorSilver,
        button1Text,
        button1Link,
        button2Text,
        button2Link
    } = props;

    return (
        <div className={styles['sponsor-block-wrapper']}>
            <h2 className={'h2 ' + styles['sponsor-block-heading']}>{props.heading}</h2>
            <div className={styles['sponsor-block-description']}>
                {
                    (props.children != null) ? props.children : ''
                }
            </div>
            <div className={styles['sponsor-block-tier']}>
                {
                    (props.sponsorGold.length != 0 || props.sponsorGold != null) ? (
                        props.sponsorGold.map((sponsor, i) => (
                            (sponsor.image) ? (
                                <div className={styles['sponsor-block-image-wrapper']}>
                                    <Image src={sponsor.image} alt={sponsor.name} layout="fill" objectFit="contain" />
                                </div>
                            ) : (
                                <div className={styles['sponsor-block-image-wrapper']}>
                                    <Image src={'https://source.unsplash.com/random/300x300'} alt={sponsor.name} layout="fill" objectFit="contain" />
                                </div>
                            )
                        ))
                    ) : ''
                }
            </div>
            <div className={styles['sponsor-block-tier']}>
                {
                    (props.sponsorSilver.length != 0 || props.sponsorSilver != null) ? (
                        props.sponsorSilver.map((sponsor, i) => (
                            (sponsor.image) ? (
                                <div className={styles['sponsor-block-image-wrapper']}>
                                    <Image src={sponsor.image} alt={sponsor.name} layout="fill" objectFit="contain" />
                                </div>
                            ) : (
                                <div className={styles['sponsor-block-image-wrapper']}>
                                    <Image src={'https://source.unsplash.com/random/300x300'} alt={sponsor.name} layout="fill" objectFit="contain" />
                                </div>
                            )
                        ))
                    ) : ''
                }
            </div>
            <div className={styles['sponsor-block-cta-group']}>
                {
                    (props.button1Text != null) ? <Button variant="2" className={styles['sponsor-block-button']} to={props.button1Link}>{props.button1Text}</Button> : ''
                }
                {
                    (props.button2Text != null) ? <Button className={styles['sponsor-block-button']} to={props.button2Link}>{props.button2Text}</Button> : ''
                }
            </div>
        </div>
    );
}


SponsorBlock.propTypes = {
}

export default SponsorBlock;

