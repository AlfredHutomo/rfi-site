import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './TextBlock.module.scss';

import Button from '../../global/Button';
import SectionWrapper from '../../global/SectionWrapper';
import ReactMarkdown from 'react-markdown';

const TextBlock = ({ sectionData }) => {
    const {
        isDarkBackground,
        maxWidth,
        heading,
        headingType,
        description,
        wrapperOptions,
    } = sectionData;

    const altStyle =
        isDarkBackground != null ? isDarkBackground && styles['darkBg'] : '';

    const headingCheck = () => {
        switch (headingType) {
            case 'h1':
                return <h1 className={'h1 ' + styles['text-block-heading']}>{heading}</h1>;
            case 'h2':
                return <h2 className={'h2 ' + styles['text-block-heading']}>{heading}</h2>;
            case 'h3':
                return <h3 className={'h3 ' + styles['text-block-heading']}>{heading}</h3>;
            case 'h4':
                return <h4 className={'h4 ' + styles['text-block-heading']}>{heading}</h4>;
            default:
                return '';
        }
    };

    return (
        <SectionWrapper options={wrapperOptions}>
            <div
                className={styles['text-block-wrapper'] + ' ' + altStyle}
                style={
                    maxWidth != null
                        ? { maxWidth: maxWidth + 'px' }
                        : { maxWidth: maxWidth }
                }
            >
                {heading != null ? headingCheck() : ''}
                {description != null ? (
                    <div className={styles['text-block-content']}>
                        <ReactMarkdown>{description}</ReactMarkdown>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </SectionWrapper>
    );
};

TextBlock.propTypes = {};

TextBlock.defaultProps = {
    sectionData: {
        maxWidth: 730,
    },
};

export default TextBlock;
