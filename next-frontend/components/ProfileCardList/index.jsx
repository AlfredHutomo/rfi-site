import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import styles from './ProfileCardList.module.scss';

import ProfileCard from '../ProfileCard';

import Button from '../global/Button';

const ProfileCardList = (props) => {
    const {
        heading,
        data,
        isMobileSlider,
    } = props;

    const slider = (isMobileSlider != null) ? styles['profile-list-slider'] : '';

    return (
        <div className={styles['profile-list-wrapper']}>
            <div className={styles['profile-list-header']}>
                {
                    (props.heading != null) ? (
                        <h2 className="h2">{ props.heading }</h2>
                    ) : (
                        ''
                    )
                }
                {
                    (props.children != null) ? (
                        <div className={styles['profile-list-description']}>
                            { props.children }
                        </div>
                    ) : (
                        ''
                    )
                }
            </div>

            {(props.data != null && props.data.length != 0) ? (
                <ul className={styles['profile-list'] + ' ' + slider}>
                    {props.data.map((profile, i) => (
                        <li key={i} className={styles['profile-list-item']}>
                            <Link href="#" passHref={true}>
                                <ProfileCard
                                    //style={{ maxWidth: '40rem' }}
                                    data={{
                                        image: profile.image,
                                        name: profile.name,
                                        title: profile.title,
                                    }}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                ''
            )}
            <div className={styles['profile-list-cta']}>
                <Button to='#'>
                    See the whole team
                </Button>
            </div>
        </div>
    );
};

ProfileCardList.propTypes = {};

export default ProfileCardList;
