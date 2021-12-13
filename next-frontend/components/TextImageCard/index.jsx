import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './TextImageCard.module.scss';

import DefaultCardImg from './default-card-img.jpg';

import Button from '../global/Button';

const TextImageCard = (props) => {

    const {
        isImageOnRight,
        isVerticalCentreAlign,
        image,
        preHeading,
        heading,
        buttonLink,
        buttonText
    } = props;

    const reverse = (props.isImageOnRight) ? styles['text-image-card--reverse'] : '';
    const vcentre = (props.isVerticalCentreAlign) ? styles['text-image-card--vcentre'] : '';

    return (
        <div className={styles['text-image-card-wrapper'] + ' ' + reverse + ' ' + vcentre}>
            <div className={styles['text-image-card-col-img']}>
                {
                    (props.image != null) ? 
                    <Image src={props.image} /> :
                    <Image src={DefaultCardImg} />
                }
            </div>
            <div className={styles['text-image-card-col-txt']}>
                {
                    (props.preHeading != null) ?
                        <h4 className={styles['text-image-card-col-txt-preheading']}>
                            {props.preHeading}
                        </h4>
                    : ''
                }

                {
                    (props.heading != null) ?
                        <h2 className={styles['text-image-card-col-txt-heading']}>
                            {props.heading}
                        </h2>
                    : ''
                }
                <div>
                    {
                        (props.children != null) ? props.children : ''
                    }
                </div>
                {
                    (props.buttonText != null) ? <Button to={props.buttonLink}>{props.buttonText}</Button> : ''
                }
            </div>
        </div>
    );
}

TextImageCard.defaultProps = {
    isImageOnRight: false,
    isVerticalCentreAlign: false
}

TextImageCard.propTypes = {
    isImageOnRight: PropTypes.bool,
    isVerticalCentreAlign: PropTypes.bool
}

export default TextImageCard;

