import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimelineCard.module.scss';

import TimelineCard from './TimelineCard';

import Button from '../global/Button';

const Timeline = (props) => {
    const { date } = props;

    return (
        <div className={styles['timeline-wrapper']}>
            {
                (props.data != null && props.data.length != 0) ? 
                    props.data.map((tlcard, i) => (
                        <TimelineCard key={i}
                            image={tlcard.image}
                            date={tlcard.date}
                        >
                            {tlcard.content}
                        </TimelineCard>
                    ))
                : ''
            }
        </div>
    );
};

Timeline.propTypes = {};

export default Timeline;

