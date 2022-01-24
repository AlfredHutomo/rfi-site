import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorDetailBlock.module.scss';

import SponsorGold from './SponsorGold';
import SponsorSilver from './SponsorSilver';
import SponsorBronze from './SponsorBronze';

const SponsorDetailBlock = (props) => {
    const { sponsorsData } = props;

    const { goldSponsors, silverSponsors, bronzeSponsors } = props.sectionData;

    return (
        <div className={styles['sponsor-detail-block-wrapper']}>
            {goldSponsors?.data !== null && goldSponsors?.data.length !== 0 && (
                <div className={styles['sponsor-detail-block-row']}>
                    <h2 className='h2'>Our gold sponsors</h2>
                    <div className={styles['sponsor-detail-block-row-content']}>
                        {goldSponsors.data.map((sponsor, i) => (
                            <SponsorGold
                                key={`${sponsor.name}-${i}`}
                                data={sponsor}
                            />
                        ))}
                    </div>
                </div>
            )}

            {silverSponsors?.data !== null &&
                silverSponsors?.data.length !== 0 && (
                    <div className={styles['sponsor-detail-block-row']}>
                        <h2 className='h2'>Our silver sponsors</h2>
                        <div
                            className={
                                styles['sponsor-detail-block-row-content']
                            }
                        >
                            {silverSponsors.data.map((sponsor, i) => (
                                <SponsorSilver
                                    key={`${sponsor.name}-${i}`}
                                    data={sponsor}
                                />
                            ))}
                        </div>
                    </div>
                )}

            {bronzeSponsors?.data !== null &&
                bronzeSponsors?.data.length !== 0 && (
                    <div className={styles['sponsor-detail-block-row']}>
                        <h2 className='h2'>Our bronze sponsors</h2>
                        <div
                            className={
                                styles['sponsor-detail-block-row-content']
                            }
                        >
                            {bronzeSponsors.data.map((sponsor, i) => (
                                <SponsorBronze
                                    key={`${sponsor.name}-${i}`}
                                    data={sponsor}
                                />
                            ))}
                        </div>
                    </div>
                )}
        </div>
    );
};

SponsorDetailBlock.propTypes = {};

export default SponsorDetailBlock;
