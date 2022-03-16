import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { Icon } from '@mui/material';

import InfoTile from './infoTile';
import styles from './InfoTile.module.scss';
import SocialIcons from '../global/SocialIcons';

const InfoTileList = ({ data }) => {
    const { contacts, socials } = data;

    return (
        <div className={styles['info-tile-list-wrapper']}>
            {contacts?.map((contact, i) => (
                <InfoTile
                    key={i}
                    heading={contact.contactName}
                    phone={contact.phoneNumber}
                    email={contact.email}
                />
            ))}
            <InfoTile heading='Social Media'>
                <div className={styles['info-tile-list-social']}>
                    {socials?.map((social, i) => (
                        <a
                            key={i}
                            href={social.linkTo}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <SocialIcons>{social.platform}</SocialIcons>
                        </a>
                    ))}
                </div>
            </InfoTile>
        </div>
    );
};

InfoTileList.propTypes = {};

InfoTileList.defaultProps = {};

export default InfoTileList;
