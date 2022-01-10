import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';

import Card from '../global/Card/';
import CardContent from '../global/CardContent/';
import CardMedia from '../global/CardMedia/';

import styles from './PostCard.module.scss';

import DefaultCardImg from './default-post-card-img.jpg';

/**
 * BlogCard
 * component to represent a blog article
 *
 * NOTE: might need a temporary or placeholder image later
 */
const PostCard = (props) => {
    const { data, ...others } = props;

    const handleClick = (event) => {
        event.preventDefault();
        console.log('clicked');
    };

    return (
        <div className={styles['post-card-wrapper']} onClick={handleClick}>
            <Card {...others}>
                <CardMedia className={styles['post-card-image']}>
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
                <CardContent className={styles['post-card-content']} compact>
                    <h4 className={'h4 ' + styles['post-card-content__heading']}>
                        {data.title}
                    </h4>
                    {
                        (data.date != null && data.author != null) ? (
                            <p className={styles['post-card-content__info']}>
                                {(data.date != null) ? data.date : ''}
                                {(data.author != null) ? ' by ' + data.author : ''}
                            </p>
                        ) : ''
                    }
                    {
                        (data.description != null) ? (
                            <p className={styles['post-card-content__description']}>
                                {data.description}
                            </p>
                        ) : ''
                    }
                </CardContent>
            </Card>
        </div>
    );
};

/* BlogCard default props */
PostCard.defaultProps = {
    data: null,
};

/* BlogCard Prop Types */
PostCard.propTypes = {
    data: PropTypes.object,
};

export default PostCard;

