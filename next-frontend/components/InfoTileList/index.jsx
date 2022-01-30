import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { Icon } from '@mui/material';

import InfoTile from './infoTile';
import styles from './InfoTile.module.scss';

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
                {socials?.map((social, i) => (
                    <Link key={i} href={social.linkTo}>
                        <Icon>{social.platform}</Icon>
                    </Link>
                ))}
            </InfoTile>
        </div>
    );
};

InfoTileList.propTypes = {};

InfoTileList.defaultProps = {};

export default InfoTileList;
