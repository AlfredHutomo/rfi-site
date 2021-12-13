import React from 'react';
import PropTypes from 'prop-types';
import styles from './blogpostcard.module.scss';

import Button from '../global/Button';

const BlogPostCard = (props) => {

    const {
        image,
        name,
        description,
        link
    } = props;

    console.log(props.tags);

    return (
        <div className={styles['blog-post-card-wrapper']}>
            <div className={styles['blog-post-card-image']}>
                {props.image}
            </div>
            <div className={styles['blog-post-card-detail']}>
                <h4 className={styles['blog-post-card-name']}>{props.name}</h4>
                <div className={styles['blog-post-card-description']}>
                    {props.description}
                </div>
            </div>
        </div>
    );
}


BlogPostCard.propTypes = {}

export default BlogPostCard;
