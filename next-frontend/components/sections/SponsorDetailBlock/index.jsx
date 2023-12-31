import React from 'react';
import PropTypes from 'prop-types';

import styles from './SponsorDetailBlock.module.scss';

import SponsorGold from './SponsorGold';
import SponsorSilver from './SponsorSilver';
import SponsorBronze from './SponsorBronze';
import SponsorDigital from './SponsorBronze';
import { SectionWrapper } from '../../global';

const SponsorDetailBlock = (props) => {
    const { goldSponsors, silverSponsors, bronzeSponsors, digitalSponsors, wrapperOptions } =
        props.sectionData;

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['sponsor-detail-block-wrapper']}>
                {goldSponsors?.data !== null &&
                    goldSponsors?.data.length !== 0 && (
                        <div className={styles['sponsor-detail-block-row']}>
                            <h2 className={'h2 ' + styles['sponsor-detail-block-row-heading']}>Our gold sponsors</h2>
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
                            <h2 className={'h2 ' + styles['sponsor-detail-block-row-heading']}>Our silver sponsors</h2>
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
                            <h2 className={'h2 ' + styles['sponsor-detail-block-row-heading']}>Our bronze sponsors</h2>
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

                {digitalSponsors?.data !== null &&
                    digitalSponsors?.data.length !== 0 && (
                        <div className={styles['sponsor-detail-block-row']}>
                            <h2 className={'h2 ' + styles['sponsor-detail-block-row-heading']}>Our digital sponsors</h2>
                            <div
                                className={
                                    styles['sponsor-detail-block-row-content']
                                }
                            >
                                {digitalSponsors.data.map((sponsor, i) => (
                                    <SponsorDigital
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
