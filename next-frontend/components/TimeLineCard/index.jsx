import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './TimelineCard.module.scss';

import DefaultCardImg from './default-card-img.jpg';

import Button from '../global/Button';

const TimelineCard = (props) => {

    const {
        image,
        heading,
        date
    } = props;

    return (

        <div className={styles['timeline-card-wrapper']}>
            <div className={styles['timeline-card-icon']}>
            </div>

            <div className={styles['timeline-card-main']}>
                <div className={styles['timeline-card-image']}>
                    {
                        (props.image != null) ? props.image : <Image src={DefaultCardImg} />
                    }
                </div>
                <div className={styles['timeline-card-content']}>
                    <h2>
                        {
                            (props.heading != null) ? props.heading : ''
                        }
                    </h2>
                    {
                        (props.children != null) ? props.children : ''
                    }
                </div>
                <span className={styles['timeline-card-date']}>
                    {
                        (props.date != null) ? props.date : ''
                    }
                </span>
            </div>
        </div>

    );
}

TimelineCard.propTypes = {
}

export default TimelineCard;

