import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Button from '../global/Button';

import styles from './LocationBlock.module.scss';

import DefaultImg from './default-img.jpg';

const LocationBlock = (props) => {

    const {
        preheading,
        heading,
        buttonText,
        buttonLink,
    } = props;

    return (
        <div className={styles['location-block-wrapper']}>
            <div className={styles['location-block-map']}>
                <Image src={DefaultImg} alt={''} />
            </div>
            <div>
                {
                    (props.preheading != null) ?
                    <h3 className={'h3'+ ' ' + styles['location-block-preheading']}>
                        {props.preheading}
                    </h3> : ''
                }
                {
                    (props.heading != null) ?
                    <h1 className={'h1'+ ' ' + styles['location-block-heading']}>
                        {props.heading}
                    </h1> : ''
                }
                {
                    (props.children != null) ?
                    <div className={styles['location-block-content']}>
                        {props.children}
                    </div> : ''
                }
                {
                    (props.buttonText != null) ?
                    <Button to={props.buttonLink} className={styles['location-block-cta']}>
                        {props.buttonText}
                    </Button> : ''
                }
            </div>
        </div>
    );
}

LocationBlock.propTypes = {
}

LocationBlock.defaultProps = {
}

export default LocationBlock;

