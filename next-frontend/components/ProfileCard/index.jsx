import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';

import { useState } from 'react';
import { Icon } from '@mui/material';

import Card from '../global/Card/';
import CardContent from '../global/CardContent/';
import CardMedia from '../global/CardMedia/';

import styles from './ProfileCard.module.scss';


import DefaultCardImg from './default-profile-card-img.jpg';

/**
 * ProfileCard
 * component to represent a short profile of a person
 *
 * NOTE: might need a temporary or placeholder image later
 */
const ProfileCard = (props) => {
    const {
        data,
        ...others
    } = props;

    const [popupActive, setPopup] = useState(false); // note: same as var active = false in v js

    const togglePopup = (event) => {
        setPopup((state) => !state);
    };

    return (
        <div className={styles['profile-card-wrapper']}>
            <Card {...others} onClick={togglePopup}>
                <CardMedia className={styles['profile-card-image']}>
                    {props.data.image != null ? (
                        <Image
                            src={props.data.image}
                            layout='fill'
                            objectFit='cover'
                            alt={''}
                        />
                    ) : (
                        <Image src={DefaultCardImg} alt={''} />
                    )}
                </CardMedia>
                <CardContent className={styles['profile-card-content']} compact>
                    <h3 className={'h3 ' + styles['profile-card-content__name']}>
                        {props.data.name}
                    </h3>
                    {props.data.title && (
                        <p className={styles['profile-card-content__title']}>
                            {props.data.title}
                        </p>
                    )}
                    {props.data.description && (
                        <p className={styles['profile-card-content__desc']}>
                            {props.data.description}
                        </p>
                    )}
                </CardContent>
            </Card>

            <div className={`${styles['profile-card-detail-wrapper']} ${popupActive ? styles['active'] : ''}`}>
                <span className={styles['profile-card-detail-close']} onClick={togglePopup}>
                    <Icon className={styles['profile-card-detail-close-icon']}>close</Icon>
                </span>
                <div className={styles['profile-card-detail']}>
                    <div className={styles['profile-card-detail-avatar']}>
                        <div>
                        {props.data.image != null ? (
                            <Image
                                src={props.data.image}
                                layout='fill'
                                objectFit='cover'
                                alt={''}
                            />
                        ) : (
                            <Image src={DefaultCardImg} alt={''} />
                        )}
                        </div>
                    </div>
                    <div className={styles['profile-card-detail-main']}>
                        <h2 className={'h2 ' + styles['profile-card-detail-heading']}>{props.data.name}</h2>
                        <div className={styles['profile-card-detail-role']}>
                            {props.data.title}
                        </div>
                        <div className={styles['profile-card-detail-content']}>
                            {props.children}
                        </div>
                        {
                            (props.data.programs != null && props.data.programs.length != 0) ? (
                                <div className={styles['profile-card-detail-programs']}>
                                    <h3 className={'h3 ' + styles['profile-card-detail-heading']}>Programs {props.data.name} Coaches</h3>
                                    <ul className={styles['profile-card-detail-plist']}>
                                    {
                                        props.data.programs.map((program, i) => (
                                            <li key={i}>
                                                <h5 className='h5'>{ program.name }</h5>
                                                { program.desc }
                                            </li>
                                        ))
                                    }
                                    </ul>
                                </div>
                            ) : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ProfileCard default props */
ProfileCard.defaultProps = {
    data: null,
};

/* ProfileCard Prop Types */
ProfileCard.propTypes = {
    data: PropTypes.object,
};

export default ProfileCard;
