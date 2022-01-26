import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProgramDetailTiles.module.scss';

import ProgramDetailDateTile from './ProgramDetailDateTile';
import ProgramDetailVenueTile from './ProgramDetailVenueTile';
import SectionWrapper from '../global/SectionWrapper';

const ProgramDetailTiles = (props) => {
    const { data } = props;

    return (
        // TODO: Stylying for program details tiles
        <SectionWrapper>
            <div className={styles['program-detail-tiles-wrapper']}>
                <h2 className={'h2 ' + styles['program-details-tiles-heading']}>
                    Information & details
                </h2>

                <div className={styles['program-detail-tiles']}>
                    {data.venue !== null && (
                        <ProgramDetailVenueTile data={data.venue} />
                    )}
                    {data.schedule !== null && (
                        <ProgramDetailDateTile data={data.schedule} />
                    )}
                </div>

                <div className={styles['program-detail-misc-info']}>
                    {data.disclamer === '' && data.disclamer.length === 0
                        ? ''
                        : data.disclamer}
                </div>
            </div>
        </SectionWrapper>
    );
};

ProgramDetailTiles.defaultProps = {
    data: null,
};

ProgramDetailTiles.propTypes = {
    //data: PropTypes.object,
};

export default ProgramDetailTiles;
