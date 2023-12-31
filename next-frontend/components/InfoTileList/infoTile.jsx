import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

import { Icon } from '@mui/material';

import styles from './InfoTile.module.scss';

const InfoTile = (props) => {
    const { heading, phone, email } = props;

    return (
        <div className={styles['info-tile-wrapper']}>
            {props.heading != null ? (
                <h4 className={'h4' + ' ' + styles['info-tile-heading']}>
                    {props.heading}
                </h4>
            ) : (
                ''
            )}
            <div className={styles['info-tile-content']}>
                {props.phone != null ? (
                    <span>
                        <Link href={'tel:' + props.phone}>{props.phone}</Link>
                    </span>
                ) : (
                    ''
                )}
                {props.phone != '' && props.email ? (
                    <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                ) : (
                    ''
                )}
                {props.email != null ? (
                    <span>
                        <Link href={'mailto:' + props.email}>
                            {props.email}
                        </Link>
                    </span>
                ) : (
                    ''
                )}
            </div>
            {props.children != null ? <div>{props.children}</div> : ''}
        </div>
    );
};

InfoTile.propTypes = {};

InfoTile.defaultProps = {};

export default InfoTile;
