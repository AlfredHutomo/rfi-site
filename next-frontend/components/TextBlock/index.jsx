import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './TextBlock.module.scss';

import Button from '../global/Button';
import SectionWrapper from '../global/SectionWrapper';

const TextBlock = (props) => {
    const { maxWidth, heading, headingType, description, wrapperOptions } =
        props;

    const headingCheck = () => {
        switch (headingType) {
            case 'h1':
                return <h1 className='h1'>{heading}</h1>;
            case 'h2':
                return <h2 className='h2'>{heading}</h2>;
            case 'h3':
                return <h3 className='h3'>{heading}</h3>;
            case 'h4':
                return <h4 className='h4'>{heading}</h4>;
            default:
                return '';
        }
    };

    return (
        <SectionWrapper options={wrapperOptions}>
            <div
                className={styles['text-block-wrapper']}
                style={
                    maxWidth != null
                        ? { maxWidth: maxWidth + 'px' }
                        : { maxWidth: maxWidth }
                }
            >
                {heading != null ? headingCheck() : ''}
                {description != null ? (
                    <div className={styles['text-block-content']}>
                        {description}
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
    maxWidth: 730,
};

export default TextBlock;
