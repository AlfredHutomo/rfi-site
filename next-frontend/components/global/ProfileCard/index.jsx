import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Card from '../Card/';
import CardContent from '../CardContent/';
import CardMedia from '../CardMedia/';

import styles from './ProfileCard.module.scss';

/**
 * ProfileCard
 * component to represent a short profile of a person
 *
 * NOTE: might need a temporary or placeholder image later
 */
const ProfileCard = (props) => {
  const { data, ...others } = props;

  return (
    <Card {...others}>
      <CardMedia>
        <img src={data.image} draggable="false"/>
      </CardMedia>
      <CardContent className={styles['profile-card-content']} compact>
        <p className={'h3 ' + styles['profile-card-content__name']}>{data.name}</p>
        {data.title && <p className={styles['profile-card-content__title']}>{data.title}</p>}
        {data.description && <p className={styles['profile-card-content__desc']}>{data.description}</p>}
      </CardContent>
    </Card>
  )
};

/* ProfileCard default props */
ProfileCard.defaultProps = {
  data: null
}

/* ProfileCard Prop Types */
ProfileCard.propTypes = {
  data: PropTypes.object,
}

export default ProfileCard;
