import React from 'react';
import PropTypes from 'prop-types';

import styles from './TimelineCard.module.scss';

import TimelineCard from './TimelineCard';

import Button from '../../global/Button';
import SectionWrapper from '../../global/SectionWrapper';

const Timeline = ({ sectionData }) => {
    const { timelineEvents, wrapperOptions } = sectionData;

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['timeline-wrapper']}>
                {timelineEvents != null && timelineEvents.length != 0
                    ? timelineEvents.map((tlcard, i) => (
                          <TimelineCard
                              key={i}
                              image={tlcard.image.data?.attributes.url}
                              date={tlcard.date}
                          >
                              {tlcard.description}
                          </TimelineCard>
                      ))
                    : ''}
            </div>
        </SectionWrapper>
    );
};

Timeline.propTypes = {};

Timeline.defaultProps = {
    sectionData: {},
    wrapperOptions: {},
};

export default Timeline;
