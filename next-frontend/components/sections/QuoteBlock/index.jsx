import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './QuoteBlock.module.scss';
import DefaultImg from './default-img.png';
import SectionWrapper from '../../global/SectionWrapper';

const QuoteBlock = (props) => {
    const {
        avatar, // Avatar image
        authorName,
        authorRole,
        quote,
        wrapperOptions,
    } = props.sectionData;

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['quote-block-wrapper']}>
                <div className={styles['quote-block']}>
                    {quote != null ? (
                        <div className={styles['quote-block-content']}>
                            {quote}
                        </div>
                    ) : (
                        ''
                    )}
                    {avatar?.data != null ? (
                        <div className={styles['quote-block-avatar']}>
                            <Image
                                src={avatar.data.attributes.url}
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
                    {authorName != null ? (
                        <div className={styles['quote-block-author']}>
                            {authorName}
                        </div>
                    ) : (
                        ''
                    )}
                    {authorRole != null ? (
                        <div className={styles['quote-block-role']}>
                            {authorRole}
                        </div>
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
