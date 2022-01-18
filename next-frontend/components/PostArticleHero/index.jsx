import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '../global/SectionWrapper';

import styles from './PostArticleHero.module.scss';

import DefaultHeroImg from './default-post-banner-img.jpg';

import { Icon } from '@mui/material';

/**
 * PostArticleHero
 * component to represent a blog article
 *
 * NOTE: might need a temporary or placeholder image later
 */
const PostArticleHero = (props) => {
    const {
        image
    } = props;

    return (
        <div className={styles['post-article-hero-wrapper']}>
            <div className={styles['post-article-hero']}>
                <div className={styles['post-article-hero-icon']}>
                    <Link href='#' passHref={true}>
                        <a><Icon className={styles['post-article-hero-mui']}>arrow_back</Icon></a>
                    </Link>
                </div>
            </div>
            {
                (props.image != null) ?
                    <Image
                        src={props.image}
                        layout='fill'
                        objectFit='cover'
                        alt={''}
                    />
                :
                    <Image
                        src={DefaultHeroImg}
                        layout='fill'
                        objectFit='cover'
                        alt={''}
                    />
            }
        </div>
    );
};

/* PostArticleHero default props */
PostArticleHero.defaultProps = {
};

/* PostArticleHero Prop Types */
PostArticleHero.propTypes = {
};

export default PostArticleHero;

