import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import styles from './PostList.module.scss';

import PostCard from '../PostCard';

import Button from '../global/Button';

const PostList = (props) => {
    const {
        heading,
        data,
        isMobileSlider,
    } = props;

    const slider = (isMobileSlider != null) ? styles['post-list-slider'] : '';

    return (
        <div className={styles['post-list-wrapper']}>
            <div className={styles['post-list-header']}>
                {
                    (props.heading != null) ? (
                        <h2 className="h2">{ props.heading }</h2>
                    ) : (
                        ''
                    )
                }
                {
                    (props.children != null) ? (
                        <div className={styles['post-list-description']}>
                            { props.children }
                        </div>
                    ) : (
                        ''
                    )
                }
            </div>

            {(props.data != null && props.data.length != 0) ? (
                <ul className={styles['post-list'] + ' ' + slider}>
                    {props.data.map((post, i) => (
                        <li key={i} className={styles['post-list-item']}>
                            <Link href={post.link} passHref={true}>
                                <PostCard
                                    //style={{ maxWidth: '40rem' }}
                                    data={{
                                        image: post.image,
                                        title: post.title,
                                        date: post.date,
                                        author: post.author,
                                        description: post.description,
                                        link: post.link,
                                    }}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                ''
            )}
            <div className={styles['post-list-cta']}>
                <Button to='#'>
                    Load more
                </Button>
            </div>
        </div>
    );
};

PostList.propTypes = {};

export default PostList;

