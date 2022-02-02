import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './TimelineCard.module.scss';

import DefaultCardImg from './default-card-img.jpg';

import Button from '../../global/Button';

const TimelineCard = (props) => {
    const { image, heading, date, children } = props;

    return (
        <div className={styles['timeline-card-wrapper']}>
            <div className={styles['timeline-card-dot']}></div>

            <div className={styles['timeline-card-date']}>
                {date != null ? date : ''}
            </div>

            <div className={styles['timeline-card-main']}>
                {image.data != null && (
                    <div className={styles['timeline-card-image']}>
                        <Image
                            src={image.data.attributes.url}
                            layout='fill'
                            objectFit='cover'
                            alt={''}
                        />
                    </div>
                )}
                <div className={styles['timeline-card-content']}>
                    {props.heading != null ? <h2>{heading}</h2> : ''}
                    {props.children != null ? <h4>{children}</h4> : ''}
                </div>
            </div>
        </div>
    );
};

TimelineCard.propTypes = {};

export default TimelineCard;
