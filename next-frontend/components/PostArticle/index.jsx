import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './PostArticle.module.scss';

import DefaultCardImg from './default-post-article-img.jpg';

/**
 * BlogCard
 * component to represent a blog article
 *
 * NOTE: might need a temporary or placeholder image later
 */
const PostArticle = (props) => {
    const {
    } = props;

    return (
        <div className={styles['post-article-wrapper']}>
            <div className={styles['post-article-main']}>
                <div className={styles['post-article-header']}>
                    <div>
                        <div className={styles['post-article-tag']}>Latest Post</div>
                    </div>
                    <h2 className={'h2 ' + styles['post-article-heading']}>
                        Announcement: Santiago Ortiz appointed to coaching role at Green Gulley
                    </h2>
                    <div className={styles['post-article-misc']}>
                        15 Sep by RFI Management Team
                    </div>
                </div>

                {
                    (props.children != null) ?
                    <div className={styles['post-article']}>
                        Dear families,<br/>

                        Dear families, 
                        We are excited to provide you with news of the appointment of Santiago Ortiz – Santi – to a coaching role at Green Gully in the NPL for season 2022. Of course this announcement is made with mixed emotions as Santi has been an important and integral part of RFI since 2014.
                        Santi has made a major contribution to RFI as a coach. He originally joined us when he first came to Australia on a short term tourist visa. Santi loved Australia and wanted to return.

                        <ul>
                            <li>adfasdfasdf</li>
                            <li>adfasdfasdf</li>
                            <li>adfasdfasdf</li>
                            <li>adfasdfasdf</li>
                        </ul>

                    </div> : ''
                }
            </div>

            <div className={styles['post-article-sidebar']}>
                <div className={styles['post-article-share']}>
                    share
                </div>
            </div>
        </div>
    );
};

/* PostArticle default props */
PostArticle.defaultProps = {
};

/* PostArticle Prop Types */
PostArticle.propTypes = {
};

export default PostArticle;

