import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProgramDetailTiles.module.scss';
import Button from '../global/Button';

import { Icon } from '@mui/material';

const ProgramDetailVenueTile = (props) => {
    const { data } = props;

    return (
        <div className={styles['program-detail-date-tile']}>
            <div className={styles['program-detail-date-tile-icon']}>
                <Icon className={styles['program-detail-date-tile-icon-mui']}>
                    calendar_today
                </Icon>
            </div>
            <div>
                <h3 className='h3'>Venue</h3>
                {
                    (data.venue != '') ? <p>{data.venue}</p> : 'No venue available at this time'
                }
                {
                    (data.venueDescription != '') ? <p>{data.venueDescription}</p> : 'No venue info available at this time'
                }
                <Button size='small' to={data.venueMapLink}>Get directions</Button>
            </div>


            {props.children != null ? (
                <h5 className={'h5 ' + styles['usp-block-content']}>
                    {props.children}
                </h5>
            ) : (
                ''
            )}
        </div>
    );
};

ProgramDetailVenueTile.propTypes = {};

export default ProgramDetailVenueTile;
