import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProgramDetailTiles.module.scss';

import ProgramDetailDateTile from './ProgramDetailDateTile';
import ProgramDetailVenueTile from './ProgramDetailVenueTile';

const ProgramDetailTiles = (props) => {
    const { data } = props;

    return (
        <div className={styles['program-detail-tiles-wrapper']}>
            <ProgramDetailVenueTile />
            <ProgramDetailDateTile />
        </div>
    );
};

ProgramDetailTiles.defaultProps = {
    data: null,
};

ProgramDetailTiles.propTypes = {
    //data: PropTypes.object,
};

export default ProgramDetailTiles;

