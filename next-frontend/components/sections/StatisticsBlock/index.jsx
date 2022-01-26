import React from 'react';
import PropTypes from 'prop-types';

import styles from './StatisticsBlock.module.scss';

import Button from '../../global/Button';
import SectionWrapper from '../../global/SectionWrapper';

const StatisticsBlock = (props) => {
    const {
        heading,
        data: statsData,
        description,
        isDarkBackground,
    } = props.sectionData;

    const altStyle = isDarkBackground ? styles['darkBg'] : '';

    return (
        <SectionWrapper options={props.wrapperOptions}>
            <div
                className={styles['statistics-block-wrapper'] + ' ' + altStyle}
            >
                {heading != null ? (
                    <h2 className={'h2 ' + styles['statistics-block-heading']}>
                        {heading}
                    </h2>
                ) : (
                    ''
                )}
                {description != null ? (
                    <div className={styles['statistics-block-description']}>
                        {description}
                    </div>
                ) : (
                    ''
                )}
                <div className={styles['statistics-block-data']}>
                    {statsData?.length != 0 || statsData != null
                        ? statsData?.map((stat, i) => (
                              <div
                                  key={i}
                                  className={
                                      styles['statistics-block-data-detail']
                                  }
                              >
                                  {stat.number}
                                  <span>{stat.dataName}</span>
                              </div>
                          ))
                        : ''}
                </div>
            </div>
        </SectionWrapper>
    );
};

StatisticsBlock.propTypes = {};

export default StatisticsBlock;
