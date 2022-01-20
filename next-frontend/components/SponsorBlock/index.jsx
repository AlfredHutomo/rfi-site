import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './SponsorBlock.module.scss';

import Button from '../global/Button';

const SponsorBlock = (props) => {
    const { goldSponsors, silverSponsors, bronzeSponsors, button1, button2 } =
        props.sectionData;

    console.log(props.sectionData);

    return (
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
                                      alt={sponsor.name}
                                      layout='fill'
                                      objectFit='contain'
                                  />
                              </div>
                          )
                      )
                    : ''}
            </div>
            <div className={styles['sponsor-block-tier']}>
                {props.sponsorSilver.length != 0 || props.sponsorSilver != null
                    ? props.sponsorSilver.map((sponsor, i) =>
                          sponsor.image ? (
                              <div
                                  key={i}
                                  className={
                                      styles['sponsor-block-image-wrapper']
                                  }
                              >
                                  <Image
                                      src={sponsor.image}
                                      alt={sponsor.name}
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
                                      alt={sponsor.name}
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
                        {button1.text}
                    </Button>
                ) : (
                    ''
                )}
                {button2 != null ? (
                    <Button
                        className={styles['sponsor-block-button']}
                        to={button2.url}
                    >
                        {button2.text}
                    </Button>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

SponsorBlock.propTypes = {};

export default SponsorBlock;
