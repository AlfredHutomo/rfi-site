import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';

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
    const { data, ...others } = props;

    const handleClick = (event) => {
        event.preventDefault();
        console.log('clicked');
        //Logic for open up the popup
    };

    return (
        <div className={styles['profile-card-wrapper']} onClick={handleClick}>
            <Card {...others}>
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
                        {data.name}
                    </h3>
                    {data.title && (
                        <p className={styles['profile-card-content__title']}>
                            {data.title}
                        </p>
                    )}
                    {data.description && (
                        <p className={styles['profile-card-content__desc']}>
                            {data.description}
                        </p>
                    )}
                </CardContent>
            </Card>
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
