import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './ProgramCard.module.scss';

import DefaultCardImg from './default-card-img.jpg';

import Button from '../global/Button';

const ProgramCard = (props) => {
    const { image, name, tags, slug } = props;

    return (
        <div className={styles['program-card-wrapper']}>
            <div className={styles['program-card-image']}>
                {image.data != null ? (
                    <Image
                        src={image.data?.attributes.url}
                        layout='fill'
                        objectFit='cover'
                        alt={''}
                    />
                ) : (
                    <Image src={DefaultCardImg} alt={''} />
                )}
            </div>
            <div className={styles['program-card-detail']}>
                <div className={styles['program-card-detail-top']}>
                    <h4 className={styles['program-card-name']}>{name}</h4>
                    {tags != null && tags.length != 0 ? (
                        <ul className={styles['program-card-taglist']}>
                            {tags.map((tag, i) => (
                                <li key={i} className={styles['program-card-tag']}>
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        ''
                    )}
                    <div className={styles['program-card-description']}>
                        {props.children}
                    </div>
                </div>
                <div className={styles['program-card-cta']}>
                    <Button to={`/programs/${slug}`}>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

ProgramCard.propTypes = {};

export default ProgramCard;
