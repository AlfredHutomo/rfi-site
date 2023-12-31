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
                        Register today to start{' '}
                        <span style={{ color: '#674fff' }}>
                            your football journey
                        </span>{' '}
                        with RFI!
                    </h4>
                    <p className={styles['rinterest-card__body']}>
                        If you are interested in speaking to one of our coaches
                        about RFI and the various programs on offer, please
                        register your interest and we will get in touch with
                        you.
                    </p>
                    <Button
                        to={'/register'}
                        className={styles['rinterest-card__cta']}
                        variant='1'
                    >
                        Register your interest
                    </Button>
                    <span className={styles['rinterest-card__caption']}>
                        Please allow 24-48 hours for our team to get back to you
                    </span>
                </CardContent>
            </Card>
        </SectionWrapper>
    );
};

RegisterInterestCard.defaultProps = {};

RegisterInterestCard.propTypes = {};

export default RegisterInterestCard;
