import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';

import Button from '../../global/Button/';
import Card from '../../global/Card/';
import CardContent from '../../global/CardContent/';
import CardMedia from '../../global/CardMedia/';

import styles from './RegisterInterestCard.module.scss';
import LogoText from '../../../public/logo-text-light.png';
import DefaultCardImg from './default-reg-card-img.jpg';
import { SectionWrapper } from '../../global';

/**
 * RegisterInterestCard
 */
const RegisterInterestCard = (props) => {
    const { style, className } = props;

    return (
        <SectionWrapper>
            <Card horizontal>
                <CardMedia className={styles['rinterest-card__img-wrapper']}>
                    <Image src={DefaultCardImg} alt={''} />
                    <span className={styles['rinterest-card__logo']}>
                        <Image
                            src={LogoText}
                            width={260}
                            height={70}
                            alt={''}
                        />
                    </span>
                </CardMedia>
                <CardContent className={styles['rinterest-card__content']}>
                    <h4 className={'h2 ' + styles['rinterest-card__heading']}>
                        Register today and get{' '}
                        <span style={{ color: '#674fff' }}>world cup</span>{' '}
                        ready!
                    </h4>
                    <p className={styles['rinterest-card__body']}>
                        Lorem ipsum dolor sit amet, consectetur adipsicing elit.
                        Tincidunt diam tempus convalis eget, consectetur
                        adipsicing elit.
                    </p>
                    <Button
                        className={styles['rinterest-card__cta']}
                        variant='1'
                    >
                        Register your interest
                    </Button>
                    <span className={styles['rinterest-card__caption']}>
                        Please allow 24-48 hours for our tem to get back to you
                    </span>
                </CardContent>
            </Card>
        </SectionWrapper>
    );
};

RegisterInterestCard.defaultProps = {};

RegisterInterestCard.propTypes = {};

export default RegisterInterestCard;
