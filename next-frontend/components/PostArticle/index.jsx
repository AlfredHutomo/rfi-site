import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './PostArticle.module.scss';

import DefaultCardImg from './default-post-article-img.jpg';
import SectionWrapper from '../global/SectionWrapper';
import ReactMarkdown from 'react-markdown';
import {
  EmailShareButton,
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

import {useRouter} from 'next/router';

/**
 * BlogCard
 * component to represent a blog article
 *
 * NOTE: might need a temporary or placeholder image later
 */
const PostArticle = (props) => {
    const { data } = props;
    const router = useRouter();

    const shareUrl = 'https://rfi-site.vercel.app'+router.asPath;


    return (
        <SectionWrapper>
            <div className={styles['post-article-wrapper']}>
                <div className={styles['post-article-main']}>
                    <div className={styles['post-article-header']}>
                        {/*
                        <div>
                            <div className={styles['post-article-tag']}>
                                Latest Post
                            </div>
                        </div>
                        */}
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
                    <div className={styles['post-article-share']}>
                        <h5 className={'h5 ' + styles['post-article-share-heading']}>Share</h5>
                        <div className={styles['post-article-social-list']}>
                            <TwitterShareButton url={shareUrl}>
                                <TwitterIcon />
                            </TwitterShareButton>
                            <FacebookShareButton url={shareUrl}>
                                <FacebookIcon />
                            </FacebookShareButton>
                            <WhatsappShareButton url={shareUrl}>
                                <WhatsAppIcon />
                            </WhatsappShareButton>
                            <EmailShareButton url={shareUrl}>
                                <EmailIcon />
                            </EmailShareButton>
                        </div>
                    </div>
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
