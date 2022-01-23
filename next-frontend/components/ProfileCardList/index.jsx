import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './ProfileCardList.module.scss';

import ProfileCard from '../ProfileCard';

import Button from '../global/Button';
import SectionWrapper from '../global/SectionWrapper';

const ProfileCardList = ({ sectionData, wrapperOptions }) => {
    const { heading, description, isMobileSlider, people } = sectionData;

    const slider = isMobileSlider != null ? styles['profile-list-slider'] : '';

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['profile-list-wrapper']}>
                <div className={styles['profile-list-header']}>
                    {heading != null ? <h2 className='h2'>{heading}</h2> : ''}
                    {description != null ? (
                        <div className={styles['profile-list-description']}>
                            {description}
                        </div>
                    ) : (
                        ''
                    )}
                </div>

                {people?.data != null && people.data.length != 0 ? (
                    <ul className={styles['profile-list'] + ' ' + slider}>
                        {people.data.map((profile, i) => (
                            <li key={i} className={styles['profile-list-item']}>
                                <ProfileCard
                                    //style={{ maxWidth: '40rem' }}
                                    data={profile.attributes}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    ''
                )}
                <div className={styles['profile-list-cta']}>
                    <Button to='#'>See the whole team</Button>
                </div>
            </div>
        </SectionWrapper>
    );
};

ProfileCardList.propTypes = {
    sectionData: PropTypes.object,
    wrapperOptions: PropTypes.object,
};

export default ProfileCardList;
