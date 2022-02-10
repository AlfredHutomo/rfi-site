import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorBlock.module.scss';

import Button from '../../global/Button';
import SectionWrapper from '../../global/SectionWrapper';
import { checkValidURL } from '../../../utils/utils';

const SponsorBlock = ({ sectionData }) => {
    const {
        goldSponsors,
        silverSponsors,
        bronzeSponsors,
        button1,
        button2,
        wrapperOptions,
    } = sectionData;

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['sponsor-block-wrapper']}>
                <div className={styles['sponsor-block-tier'] + ' ' + styles['sponsor-block-tier-gold']}>
                    {goldSponsors.data != null && goldSponsors.data.length != 0
                        ? goldSponsors.data.map((sponsor, i) =>
                              sponsor.attributes.logo.data ? (
                                  <div
                                      key={i}
                                      className={
                                          styles['sponsor-block-image-wrapper']
                                      }
                                  >
                                      <Image
                                          src={
                                              sponsor.attributes.logo.data
                                                  .attributes.url
                                          }
                                          alt={sponsor.attributes.name}
                                          layout='fill'
                                          objectFit='contain'
                                      />
                                  </div>
                              ) : (
                                  <div
                                      key={i}
                                      className={
                                          styles['sponsor-block-image-wrapper']
                                      }
                                  >
                                      <Image
                                          src={
                                              'https://source.unsplash.com/random/300x300'
                                          }
                                          alt={sponsor.attributes.name}
                                          layout='fill'
                                          objectFit='contain'
                                      />
                                  </div>
                              )
                          )
                        : ''}
                </div>
                <div className={styles['sponsor-block-tier'] + ' ' + styles['sponsor-block-tier-silver']}>
                    {silverSponsors.length != 0 || silverSponsors != null
                        ? silverSponsors.data.map((sponsor, i) =>
                              sponsor.attributes.logo.data ? (
                                  <div
                                      key={i}
                                      className={
                                          styles['sponsor-block-image-wrapper']
                                      }
                                  >
                                      <Image
                                          src={
                                              sponsor.attributes.logo.data
                                                  .attributes.url
                                          }
                                          alt={sponsor.attributes.name}
                                          layout='fill'
                                          objectFit='contain'
                                      />
                                  </div>
                              ) : (
                                  <div
                                      key={i}
                                      className={
                                          styles['sponsor-block-image-wrapper']
                                      }
                                  >
                                      <Image
                                          src={
                                              'https://source.unsplash.com/random/300x300'
                                          }
                                          alt={sponsor.attributes.name}
                                          layout='fill'
                                          objectFit='contain'
                                      />
                                  </div>
                              )
                          )
                        : ''}
                </div>
                <div className={styles['sponsor-block-tier'] + ' ' + styles['sponsor-block-tier-bronze']}>
                    {bronzeSponsors.length != 0 || bronzeSponsors != null
                        ? bronzeSponsors.data.map((sponsor, i) =>
                              sponsor.attributes.logo.data ? (
                                  <div
                                      key={i}
                                      className={
                                          styles['sponsor-block-image-wrapper']
                                      }
                                  >
                                      <Image
                                          src={
                                              sponsor.attributes.logo.data
                                                  .attributes.url
                                          }
                                          alt={sponsor.attributes.name}
                                          layout='fill'
                                          objectFit='contain'
                                      />
                                  </div>
                              ) : (
                                  <div
                                      key={i}
                                      className={
                                          styles['sponsor-block-image-wrapper']
                                      }
                                  >
                                      <Image
                                          src={
                                              'https://source.unsplash.com/random/300x300'
                                          }
                                          alt={sponsor.attributes.name}
                                          layout='fill'
                                          objectFit='contain'
                                      />
                                  </div>
                              )
                          )
                        : ''}
                </div>
                <div className={styles['sponsor-block-cta-group']}>
                    {button1 != null ? (
                        <Button
                            variant='2'
                            className={styles['sponsor-block-button']}
                            to={
                                button1.isExternalLink
                                   ? checkValidURL(button1.url)
                                   : checkValidURL(button1.page.data?.attributes.url)
                            }
                        >
                            {button1.displayName}
                        </Button>
                    ) : (
                        ''
                    )}
                    {button2 != null ? (
                        <Button
                            className={styles['sponsor-block-button']}
                            to={
                                button2.isExternalLink
                                   ? checkValidURL(button2.url)
                                   : checkValidURL(button2.page.data?.attributes.url)
                            }
                        >
                            {button2.displayName}
                        </Button>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

SponsorBlock.propTypes = {};

export default SponsorBlock;
