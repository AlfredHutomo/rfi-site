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
    const { index, data, ...others } = props;

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
                    {
                        index == 0 ? (<div className={styles['post-card-tag']}>Latest Post</div>) : ''
                    }
                    <h4
                        className={'h4 ' + styles['post-card-content__heading']}
                    >
                        {data.title}
                    </h4>
                    {data.date != null ? (
                        <p className={styles['post-card-content__info']}>
                            {data.date != null
                                ? new Date(data.date).toLocaleDateString(
                                      'en-AU',
                                      {
                                          day: 'numeric',
                                          month: 'short',
                                      }
                                  )
                                : ''}
                            {data.author != null
                                ? ' by ' + data.author.attributes.username
                                : ' by RFI Management Team'}
                        </p>
                    ) : (
                        ''
                    )}
                    {data.shortDescription != null ? (
                        <p className={styles['post-card-content__description']}>
                            {data.shortDescription}
                        </p>
                    ) : (
                        ''
                    )}
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
