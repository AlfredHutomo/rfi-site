import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image'

import Button from "../Button/";
import Card from "../Card/";
import CardContent from "../CardContent/";
import CardMedia from "../CardMedia/";

import styles from "./RegisterInterestCard.module.scss";
import LogoText from '../../../public/logo-text-light.png';

/**
 * RegisterInterestCard
 */
const RegisterInterestCard = (props) => {
  const { style, className } = props;

  return (
    <Card horizontal>
        <CardMedia className={styles['rinterest-card__img-wrapper']}>
            <img src="https://images.unsplash.com/photo-1518604666860-9ed391f76460" draggable="false" />
            <span className={styles['rinterest-card__logo']}>
              <Image src={LogoText} width={260} height={70} />
            </span>
        </CardMedia>
        <CardContent className={styles['rinterest-card__content']}>
            <h4 className={'h2 ' + styles['rinterest-card__heading']}>
                Register today and get <span style={{color: '#674fff'}}>world cup</span> ready!
            </h4>
            <p className={styles['rinterest-card__body']}>
                Lorem ipsum dolor sit amet, consectetur adipsicing elit.
                Tincidunt diam tempus convalis eget, consectetur adipsicing elit.
            </p>
            <Button className={styles['rinterest-card__cta']} variant="1">Register your interest</Button>
            <span className={styles['rinterest-card__caption']}>Please allow 24-48 hours for our tem to get back to you</span>
        </CardContent>
    </Card>
  );
};

RegisterInterestCard.defaultProps = {};

RegisterInterestCard.propTypes = {};

export default RegisterInterestCard;
