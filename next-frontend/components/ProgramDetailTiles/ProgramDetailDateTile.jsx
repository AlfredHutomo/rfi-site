import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProgramDetailTiles.module.scss';

import { Icon } from '@mui/material';

const ProgramDetailDateTile = (props) => {
    const { icon } = props;

    return (
        <div className={styles['program-detail-date-tile']}>
            <div className={styles['program-detail-date-tile-icon']}>
                <Icon baseClassName="material-icons-outlined" className={styles['program-detail-date-tile-icon-mui']}>
                    calendar_today
                </Icon>
            </div>
            <div>
                <h3 className='h3'>Schedule</h3>
                <p>Saturdays - 9am to 10.15am</p>

                <div className={styles['program-detail-date-tile-block-group']}>
                    <div className={styles['program-detail-date-tile-block']}>
                        <h5 className='h5'>Starting date</h5>
                        <p>Saturday 9th February</p>
                    </div>
                    <div className={styles['program-detail-date-tile-block']}>
                        <h5 className='h5'>End date</h5>
                        <p>Saturday 30th November</p>
                    </div>
                </div>

                <p>*There will be a break of one session between each term</p>
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

ProgramDetailDateTile.propTypes = {};

export default ProgramDetailDateTile;
