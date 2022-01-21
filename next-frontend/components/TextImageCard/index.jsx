import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './TextImageCard.module.scss';

import DefaultCardImg from './default-card-img.jpg';

import Button from '../global/Button';
import SectionWrapper from '../global/SectionWrapper';

import ReactMarkdown from 'react-markdown';

const TextImageCard = (props) => {
    const {
        imageOnRight,
        verticalAlign,
        image,
        preHeading,
        heading,
        text,
        button,
    } = props.sectionData;

    const reverse = imageOnRight ? styles['text-image-card--reverse'] : '';
    const vcentre = verticalAlign ? styles['text-image-card--vcentre'] : '';

    return (
        <SectionWrapper options={props.wrapperOptions}>
            <div
                className={
                    styles['text-image-card-wrapper'] +
                    ' ' +
                    reverse +
                    ' ' +
                    vcentre
                }
            >
                <div className={styles['text-image-card-col-img']}>
                    {image?.data != null ? (
                        <Image
                            src={image.data.attributes.url}
                            width={image.data.attributes.width}
                            height={image.data.attributes.height}
                            alt={''}
                        />
                    ) : (
                        <Image src={DefaultCardImg} alt={''} />
                    )}
                </div>
                <div className={styles['text-image-card-col-txt']}>
                    {preHeading != null ? (
                        <h4
                            className={
                                'h4 ' +
                                styles['text-image-card-col-txt-preheading']
                            }
                        >
                            {preHeading}
                        </h4>
                    ) : (
                        ''
                    )}

                    {heading != null ? (
                        <h2
                            className={
                                'h2 ' +
                                styles['text-image-card-col-txt-heading']
                            }
                        >
                            {heading}
                        </h2>
                    ) : (
                        ''
                    )}
                    {text != null ? <ReactMarkdown>{text}</ReactMarkdown> : ''}
                    {button != null ? (
                        <Button to={button.url}>{button.text}</Button>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

TextImageCard.defaultProps = {
    sectionData: {
        isImageOnRight: false,
        isVerticalCentreAlign: false,
    },
};

TextImageCard.propTypes = {
    sectionData: PropTypes.object,
};

export default TextImageCard;
