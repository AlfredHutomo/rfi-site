import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './QuoteBlock.module.scss';
import DefaultImg from './default-img.png';
import SectionWrapper from '../global/SectionWrapper';

const QuoteBlock = (props) => {
    const {
        avatar, // Avatar image
        author,
        role,
    } = props;

    return (
        <SectionWrapper>
            <div className={styles['quote-block-wrapper']}>
                <div className={styles['quote-block']}>
                    {props.children != null ? (
                        <div className={styles['quote-block-content']}>
                            {props.children}
                        </div>
                    ) : (
                        ''
                    )}
                    {avatar != null ? (
                        <div className={styles['quote-block-avatar']}>
                            <Image
                                src={avatar}
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
                    {author != null ? (
                        <div className={styles['quote-block-author']}>
                            {author}
                        </div>
                    ) : (
                        ''
                    )}
                    {role != null ? (
                        <div className={styles['quote-block-role']}>{role}</div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

QuoteBlock.propTypes = {};

export default QuoteBlock;
