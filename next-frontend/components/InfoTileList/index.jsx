import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { Icon } from '@mui/material';

import InfoTile from './InfoTile';
import styles from './InfoTile.module.scss';


const InfoTileList = (props) => {

    const {
        heading,
        phone,
        email,
    } = props;

    return (
        <div className={styles['info-tile-list-wrapper']}>
            <InfoTile
                heading="General Inquiries"
                phone="0800-123-4567"
                email="general@rfi.com"
            />
            <InfoTile
                heading="Membership Inquiries"
                phone="0800-123-4567"
                email="membership@rfi.com"
            />
            <InfoTile
                heading="Sponsorship Inquiries"
                phone="0800-123-4567"
                email="sponsor@rfi.com"
            />
            <InfoTile
                heading="Social Media"
            >
                <Link href="#"><Icon>facebook</Icon></Link>
                <Link href="#"><Icon>instagram</Icon></Link>
            </InfoTile>
        </div>
    );
}

InfoTileList.propTypes = {
}

InfoTileList.defaultProps = {
}

export default InfoTileList;

