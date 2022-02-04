import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import styles from './PostList.module.scss';

import PostCard from '../../PostCard';

import Button from '../../global/Button';
import SectionWrapper from '../../global/SectionWrapper';

import { getPostList, getThreeLatestBlogs } from '../../../utils/api';
import { useEffect } from 'react';
import { useState } from 'react';

const PostList = (props) => {
    const { recommendation } = props;
    const { heading, data, isMobileSlider, wrapperOptions } = props.sectionData;

    const [posts, setPosts] = useState([]);

    useEffect(async () => {
        const fetchData = async () => {
            const data = recommendation
                ? await getThreeLatestBlogs()
                : await getPostList();
            setPosts(data);
        };

        fetchData();
    }, []);

    const slider = isMobileSlider != null ? styles['post-list-slider'] : '';

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['post-list-wrapper']}>
                <div className={styles['post-list-header']}>
                    {recommendation ? (
                        <h2 className='h2'>Recommended</h2>
                    ) : heading != null ? (
                        <h2 className='h2'>{heading}</h2>
                    ) : (
                        ''
                    )}

                    {props.children != null ? (
                        <div className={styles['post-list-description']}>
                            {props.children}
                        </div>
                    ) : (
                        ''
                    )}
                </div>

                {posts != null && posts.length != 0 ? (
                    <ul className={styles['post-list'] + ' ' + slider}>
                        {posts.map((post, i) => (
                            <li key={i} className={styles['post-list-item']}>
                                <Link
                                    href={`/blog/${post.attributes.slug}`}
                                    passHref={true}
                                >
                                    {/* missing description styling */}
                                    <PostCard
                                        //style={{ maxWidth: '40rem' }}
                                        data={{
                                            image: post.attributes.cover_Image
                                                .data?.attributes.url,
                                            imageWidth:
                                                post.attributes.cover_Image.data
                                                    ?.attributes.width,
                                            imageHeight:
                                                post.attributes.cover_Image.data
                                                    ?.attributes.height,
                                            title: post.attributes.title,
                                            date: post.attributes.createdAt,
                                            author: post.attributes.author.data,
                                            description:
                                                post.attributes
                                                    .shortDescription,
                                            link: post.attributes.slug,
                                        }}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    ''
                )}
                {/*recommendation ? null : (
                    <div className={styles['post-list-cta']}>
                        <Button to='#'>Load more</Button>
                    </div>
                    )
                    */}
            </div>
        </SectionWrapper>
    );
};

PostList.propTypes = {
    sectionData: PropTypes.object,
};

PostList.defaultProps = {
    sectionData: {},
};

export default PostList;
