import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorBlock.module.scss';

import Button from '../../global/Button';
import SectionWrapper from '../../global/SectionWrapper';

const SponsorBlock = ({ sectionData, wrapperOptions }) => {
    const { goldSponsors, silverSponsors, bronzeSponsors, button1, button2 } =
        sectionData;

    console.log(sectionData);
    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['sponsor-block-wrapper']}>
                <div className={styles['sponsor-block-tier']}>
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
                <div className={styles['sponsor-block-tier']}>
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
                <div className={styles['sponsor-block-tier']}>
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
                            to={button1.url}
                        >
                            {button1.displayName}
                        </Button>
                    ) : (
                        ''
                    )}
                    {button2 != null ? (
                        <Button
                            className={styles['sponsor-block-button']}
                            to={button2.url}
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
