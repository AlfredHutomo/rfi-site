import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProgramDetailTiles.module.scss';
import Button from '../global/Button';

import { Icon } from '@mui/material';

const ProgramDetailVenueTile = (props) => {
    const { icon } = props;

    return (
        <div className={styles['program-detail-date-tile']}>
            <div className={styles['program-detail-date-tile-icon']}>
                <Icon className={styles['program-detail-date-tile-icon-mui']}>
                    calendar_today
                </Icon>
            </div>
            <div>
                {/* Maybe make this to markdown? */}
                <h3 className='h3'>Venue</h3>
                <p>Gladstone Park Reserve</p>
                <p>Gladstone Park, VIC, 3043</p>
                <p>
                    The Gladstone Park Community Centre is located on South
                    Circular Road, and hosts a number of community bodies, such
                    as the basketball club and mothers' groups.
                </p>
                <Button size='small'>Get directions</Button>
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
