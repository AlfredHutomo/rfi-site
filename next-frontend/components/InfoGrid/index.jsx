import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './InfoGrid.module.scss';
import DefaultImg from './default-grid-img.jpg';

import Button from '../global/Button';

const InfoGrid = (props) => {
    const {} = props;

    return (
        <div className={styles['info-grid-wrapper']}>
            <div className={styles['info-grid']}>
                <InfoGridItemContentType1
                    isDoubleSize
                    isLightText
                    bgcolor='#010A4F'
                    heading='RFI is real experience more content will be displayed here'
                    buttonText='Learn about us'
                    buttonLink='#'
                >
                    <p>
                        RFI takes pride in bringing to Australia the finest in
                        international youth football development. RFI takes
                        pride in bringing to Australia the finest in
                        international youth football development.
                    </p>
                </InfoGridItemContentType1>
                <InfoGridItemImage image='https://source.unsplash.com/random/300x100' />
                <InfoGridItemContentType1 bgcolor='#f30' />
                <InfoGridItemImage />
                <div className={styles['info-grid-item']}>
                    <ul>
                        <li>10 years in the game</li>
                        <li>Warm, welcoming environment </li>
                        <li>Experienced coaches from across the world</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

/**
 * Info grid item - Image
 */
const InfoGridItemImage = (props) => {
    const { isDoubleSize, image } = props;

    const double = isDoubleSize ? styles['info-grid-item-double'] : '';

    return (
        <div className={styles['info-grid-item'] + ' ' + double}>
            {props.image != null ? (
                <Image
                    src={props.image}
                    layout='fill'
                    objectFit='cover'
                    alt={''}
                />
            ) : (
                <Image
                    src={DefaultImg}
                    layout='fill'
                    objectFit='cover'
                    alt={''}
                />
            )}
        </div>
    );
};

InfoGridItemImage.defaultProps = {
    isDoubleSize: false,
};

InfoGridItemImage.propTypes = {
    isDoubleSize: PropTypes.bool,
};

/**
 * Info grid item - Content Type 1
 */
const InfoGridItemContentType1 = (props) => {
    const {
        isDoubleSize,
        isLightText,
        bgcolor,
        heading,
        content,
        buttonText,
        buttonLink,
    } = props;

    const double = isDoubleSize ? styles['info-grid-item-double'] : '';
    const light = isLightText ? styles['info-grid-item-lightext'] : '';

    return (
        <div
            className={styles['info-grid-item'] + ' ' + double + ' ' + light}
            style={{ backgroundColor: props.bgcolor }}
        >
            {props.heading != null ? (
                <h1 className={'h1 ' + styles['info-grid-item-heading']}>
                    {props.heading}
                </h1>
            ) : (
                ''
            )}

            {props.children != null ? (
                <div className={styles['info-grid-item-content']}>
                    {props.children}
                </div>
            ) : (
                ''
            )}

            {props.buttonText != null ? (
                <Button to={props.buttonLink}>{props.buttonText}</Button>
            ) : (
                ''
            )}
        </div>
    );
};

InfoGridItemContentType1.defaultProps = {
    isDoubleSize: false,
    isLightText: false,
};

InfoGridItemContentType1.propTypes = {
    isDoubleSize: PropTypes.bool,
    isLightText: PropTypes.bool,
};

const InfoGridItemContentType2 = (props) => {
    const { image } = props;

    return <div className={styles['info-grid-item']}></div>;
};

const InfoGridItemContentType3 = (props) => {
    const { image } = props;

    return <div className={styles['info-grid-item']}></div>;
};

InfoGrid.propTypes = {};

InfoGridItemImage.propTypes = {};

export {
    InfoGrid,
    InfoGridItemImage,
    InfoGridItemContentType1,
    InfoGridItemContentType2,
    InfoGridItemContentType3,
};
