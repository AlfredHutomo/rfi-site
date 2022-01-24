import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProgramDetailTiles.module.scss';

import ProgramDetailDateTile from './ProgramDetailDateTile';
import ProgramDetailVenueTile from './ProgramDetailVenueTile';
import SectionWrapper from '../global/SectionWrapper';

const ProgramDetailTiles = (props) => {
    const { data } = props;

    console.log('Program Details Data: ', data);

    return (
        // TODO: Stylying for program details tiles
        <SectionWrapper>
            <div className={styles['program-detail-tiles-wrapper']}>
                <h2 className={'h2 ' + styles['program-details-tiles-heading']}>
                    Information & details
                </h2>

                {data.venue !== null && (
                    <ProgramDetailVenueTile data={data.venue} />
                )}
                {data.schedule !== null && (
                    <ProgramDetailDateTile data={data.schedule} />
                )}

                <div className={styles['program-detail-tiles-misc-info']}>
                    {data.disclamer === '' && data.disclamer.length === 0
                        ? `There might be a session or two which may need to be
                    cancelled based on the availability of the Coaching Staff
                    and their commitments with the RFI Development Program teams
                    (i.e. attending regional or national tournaments). These
                    sessions will be rescheduled so as to ensure the provision
                    of the total amount of sessions per term.`
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
