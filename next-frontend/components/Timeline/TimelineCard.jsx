import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './TimelineCard.module.scss';

import DefaultCardImg from './default-card-img.jpg';

import Button from '../global/Button';

const TimelineCard = (props) => {
    const { image, heading, date } = props;

    return (
        <div className={styles['timeline-card-wrapper']}>
            <div className={styles['timeline-card-dot']}></div>

            <div className={styles['timeline-card-date']}>
                {props.date != null ? props.date : ''}
            </div>

            <div className={styles['timeline-card-main']}>
                <div className={styles['timeline-card-image']}>
                    {props.image != null ? (
                        // TODO: CSS Need FIXING!!!
                        <Image
                            src={props.image}
                            layout='fill'
                            objectFit='cover'
                            alt={''}
                        />
                    ) : (
                        <Image src={DefaultCardImg} alt={''} />
                    )}
                </div>
                <div className={styles['timeline-card-content']}>
                    {props.heading != null ? <h2>{props.heading}</h2> : ''}
                    {props.children != null ? <h4>{props.children}</h4> : ''}
                </div>
            </div>
        </div>
    );
};

TimelineCard.propTypes = {};

export default TimelineCard;
