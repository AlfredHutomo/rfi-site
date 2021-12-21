import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticsBlock.module.scss';

import Button from '../global/Button';

const StatisticsBlock = (props) => {
    const { heading, statsData } = props;

    return (
        <div className={styles['statistics-block-wrapper']}>
            <h2 className={'h2 ' + styles['statistics-block-heading']}>{props.heading}</h2>
            <div className={styles['statistics-block-description']}>
                {props.children != null ? props.children : ''}
            </div>
            <div className={styles['statistics-block-data']}>
                {props.statsData.length != 0 || props.statsData != null
                    ? props.statsData.map((stat, i) => (
                          <div
                              key={i}
                              className={styles['statistics-block-data-detail']}
                          >
                              {stat.number}
                              <span>{stat.content}</span>
                          </div>
                      ))
                    : ''}
            </div>
        </div>
    );
};

StatisticsBlock.propTypes = {};

export default StatisticsBlock;
