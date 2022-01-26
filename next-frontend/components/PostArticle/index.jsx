import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './PostArticle.module.scss';

import DefaultCardImg from './default-post-article-img.jpg';
import SectionWrapper from '../global/SectionWrapper';
import ReactMarkdown from 'react-markdown';

/**
 * BlogCard
 * component to represent a blog article
 *
 * NOTE: might need a temporary or placeholder image later
 */
const PostArticle = (props) => {
    const { data } = props;

    return (
        <SectionWrapper>
            <div className={styles['post-article-wrapper']}>
                <div className={styles['post-article-main']}>
                    <div className={styles['post-article-header']}>
                        <div>
                            <div className={styles['post-article-tag']}>
                                Latest Post
                            </div>
                        </div>
                        <h2 className={'h2 ' + styles['post-article-heading']}>
                            {data.title && data.title}
                        </h2>
                        <div className={styles['post-article-misc']}>
                            {data.date != null ? (
                                <>
                                    {data.date != null
                                        ? new Date(
                                              data.date
                                          ).toLocaleDateString('en-AU', {
                                              day: 'numeric',
                                              month: 'short',
                                          })
                                        : ''}
                                    {data.author != null
                                        ? ' by ' + data.author
                                        : ' by RFI Management Team'}
                                </>
                            ) : (
                                ''
                            )}
                        </div>
                    </div>

                    {props.children != null ? (
                        <div className={styles['post-article']}>
                            <ReactMarkdown>{props.children}</ReactMarkdown>
                        </div>
                    ) : (
                        ''
                    )}
                </div>

                <div className={styles['post-article-sidebar']}>
                    <div className={styles['post-article-share']}>share</div>
                </div>
            </div>
        </SectionWrapper>
    );
};

/* PostArticle default props */
PostArticle.defaultProps = {};

/* PostArticle Prop Types */
PostArticle.propTypes = {};

export default PostArticle;
