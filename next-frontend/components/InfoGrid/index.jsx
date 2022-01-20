import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './InfoGrid.module.scss';
import DefaultImg from './default-grid-img.jpg';

import SectionWrapper from '../global/SectionWrapper';
import Button from '../global/Button';

import ReactMarkdown from 'react-markdown';

const InfoGrid = (props) => {
    const { sectionData, wrapperOptions } = props;

    console.log(sectionData.gridItemsImages);
    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['info-grid-wrapper']}>
                <div className={styles['info-grid']}>
                    <InfoGridItemContentType1 data={sectionData.gridItemOne} />
                    {sectionData.gridItemsImages.map((imageData, i) => (
                        <InfoGridItemImage
                            key={`grid-item-${i}`}
                            image={imageData.image.data.attributes.url}
                        />
                    ))}
                    <InfoGridItemContentType2 data={sectionData.gridItemTwo} />
                </div>
            </div>
        </SectionWrapper>
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
            {image != null ? (
                <Image src={image} layout='fill' objectFit='cover' alt={''} />
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
        backgroundColor,
        heading,
        paragraph,
        buttonText,
        buttonLink,
    } = props.data;

    const double = isDoubleSize ? styles['info-grid-item-double'] : '';
    const light = isLightText ? styles['info-grid-item-lightext'] : '';

    return (
        <div
            className={styles['info-grid-item'] + ' ' + double + ' ' + light}
            style={{ backgroundColor: backgroundColor }}
        >
            {heading != null ? (
                <h1 className={'h1 ' + styles['info-grid-item-heading']}>
                    {heading}
                </h1>
            ) : (
                ''
            )}

            {paragraph != null ? (
                <div className={styles['info-grid-item-content']}>
                    <ReactMarkdown>{paragraph}</ReactMarkdown>
                </div>
            ) : (
                ''
            )}

            {buttonText != null ? (
                <Button variant='2' to={buttonLink}>
                    {buttonText}
                </Button>
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
    const { bgColor, isLightText, description } = props.data;

    const light = isLightText ? styles['info-grid-item-lightext'] : '';

    return (
        <div
            className={styles['info-grid-item'] + ' ' + light}
            style={{ backgroundColor: bgColor }}
        >
            <div className={styles['info-grid-item-list']}>
                <ReactMarkdown>{description}</ReactMarkdown>
            </div>
        </div>
    );
};

InfoGridItemContentType2.defaultProps = {
    isLightText: false,
};

InfoGridItemContentType2.propTypes = {
    isLightText: PropTypes.bool,
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
