import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './ProgramCard.module.scss';

import DefaultCardImg from './default-card-img.jpg';

import Button from '../global/Button';

const ProgramCard = (props) => {
    const { image, name, tags, cta, link } = props;

    return (
        <div className={styles['program-card-wrapper']}>
            <div className={styles['program-card-image']}>
                {props.image != null ? (
                    props.image
                ) : (
                    <Image src={DefaultCardImg} alt={''} />
                )}
            </div>
            <div className={styles['program-card-detail']}>
                <h4 className={styles['program-card-name']}>{props.name}</h4>
                {props.tags != null && props.tags.length != 0 ? (
                    <ul className={styles['program-card-taglist']}>
                        {props.tags.map((tag, i) => (
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
                <div className={styles['program-card-cta']}>
                    <Button to={props.link}>{cta}</Button>
                </div>
            </div>
        </div>
    );
};

ProgramCard.propTypes = {};

export default ProgramCard;
