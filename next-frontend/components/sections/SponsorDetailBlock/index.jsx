import React from 'react';
import PropTypes from 'prop-types';

import styles from './SponsorDetailBlock.module.scss';

import SponsorGold from './SponsorGold';
import SponsorSilver from './SponsorSilver';
import SponsorBronze from './SponsorBronze';
import { SectionWrapper } from '../../global';

const SponsorDetailBlock = (props) => {
    const { goldSponsors, silverSponsors, bronzeSponsors, wrapperOptions } =
        props.sectionData;

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['sponsor-detail-block-wrapper']}>
                {goldSponsors?.data !== null &&
                    goldSponsors?.data.length !== 0 && (
                        <div className={styles['sponsor-detail-block-row']}>
                            <h2 className='h2'>Our gold sponsors</h2>
                            <div
                                className={
                                    styles['sponsor-detail-block-row-content']
                                }
                            >
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
        </SectionWrapper>
    );
};

SponsorDetailBlock.propTypes = {};

export default SponsorDetailBlock;
