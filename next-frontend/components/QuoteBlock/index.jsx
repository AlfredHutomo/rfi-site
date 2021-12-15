import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './QuoteBlock.module.scss';
import DefaultImg from './default-img.png';

const QuoteBlock = (props) => {
    const {
        avatar, // Avatar image
        author,
        role,
    } = props;

    return (
        <div className={styles['quote-block-wrapper']}>
            <div className={styles['quote-block']}>
                {props.children != null ? (
                    <div className={styles['quote-block-content']}>
                        {props.children}
                    </div>
                ) : (
                    ''
                )}
                {props.avatar != null ? (
                    <div className={styles['quote-block-avatar']}>
                        <Image
                            src={props.avatar}
                            layout='fill'
                            objectFit='cover'
                            alt={''}
                        />
                    </div>
                ) : (
                    <div className={styles['quote-block-avatar']}>
                        <Image src={DefaultImg} alt={''} />
                    </div>
                )}
                {props.author != null ? (
                    <div className={styles['quote-block-author']}>
                        {props.author}
                    </div>
                ) : (
                    ''
                )}
                {props.role != null ? (
                    <div className={styles['quote-block-role']}>
                        {props.role}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

QuoteBlock.propTypes = {};

export default QuoteBlock;
