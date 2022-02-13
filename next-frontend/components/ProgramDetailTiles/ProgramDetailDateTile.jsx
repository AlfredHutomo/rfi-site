import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProgramDetailTiles.module.scss';

import dateFormat from 'dateformat';

import { Icon } from '@mui/material';

const ProgramDetailDateTile = (props) => {
    const { data } = props;

    return (
        <div className={styles['program-detail-date-tile']}>
            <div className={styles['program-detail-date-tile-icon']}>
                <Icon className={styles['program-detail-date-tile-icon-mui']}>
                    calendar_today
                </Icon>
            </div>
            <div>
                <h3 className='h3'>Schedule</h3>
                {data.schedule != '' ? (
                    <p>{data.schedule}</p>
                ) : (
                    'No schedule available at this time'
                )}

                <div className={styles['program-detail-date-tile-block-group']}>
                    <div className={styles['program-detail-date-tile-block']}>
                        <h5 className='h5'>Starting date</h5>
                        {data.startDate != null ? (
                            <p>{dateFormat(data.startDate, 'dddd dS mmmm')}</p>
                        ) : (
                            'N/A'
                        )}
                    </div>
                    <div className={styles['program-detail-date-tile-block']}>
                        <h5 className='h5'>End date</h5>
                        {data.endDate != null ? (
                            <p>{dateFormat(data.endDate, 'dddd dS mmmm')}</p>
                        ) : (
                            'N/A'
                        )}
                    </div>
                </div>

                <div className={styles['program-detail-date-tile-info']}>
                    <p>{data.scheduleDisclamer}</p>
                </div>
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
