import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorDetailBlock.module.scss';

import SponsorGold from './SponsorGold';
import SponsorSilver from './SponsorSilver';
import SponsorBronze from './SponsorBronze';

const SponsorDetailBlock = (props) => {
    const {
        sponsorsData,
    } = props;

    return (
        <div className={styles['sponsor-detail-block-wrapper']}>

            <div className={styles['sponsor-detail-block-row']}>
                <h2 className="h2">Our gold sponsors</h2>
                <div className={styles['sponsor-detail-block-row-content']}>
                {
                    props.sponsorsData != null && props.sponsorsData.length != 0
                    ? props.sponsorsData.map((sponsor, i) =>
                        (sponsor.type == 'Gold') ? (
                        <SponsorGold
                            name="Relab Studios"
                            phone="9999 8888"
                            email="hello@relab.com.au"
                        />
                        ) : ''

                      )
                    : ''
                }
                </div>
            </div>


            <div className={styles['sponsor-detail-block-row']}>
                <h2 className="h2">Our silver sponsors</h2>
                <div className={styles['sponsor-detail-block-row-content']}>
                {
                    props.sponsorsData != null && props.sponsorsData.length != 0
                    ? props.sponsorsData.map((sponsor, i) =>
                        (sponsor.type == 'Silver') ? (
                        <SponsorSilver
                            name="Relab Studios"
                            phone="9999 8888"
                            email="hello@relab.com.au"
                        />
                        ) : ''

                      )
                    : ''
                }
                </div>
            </div>


            <div className={styles['sponsor-detail-block-row']}>
                <h2 className="h2">Our bronze sponsors</h2>
                <div className={styles['sponsor-detail-block-row-content']}>
                {
                    props.sponsorsData != null && props.sponsorsData.length != 0
                    ? props.sponsorsData.map((sponsor, i) =>
                        (sponsor.type == 'Bronze') ? (
                        <SponsorBronze
                            name="Relab Studios"
                            phone="9999 8888"
                            email="hello@relab.com.au"
                        />
                        ) : ''

                      )
                    : ''
                }
                </div>
            </div>

        </div>
    );
};

SponsorDetailBlock.propTypes = {};

export default SponsorDetailBlock;
