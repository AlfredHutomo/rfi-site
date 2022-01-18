import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import SectionWrapper from '../global/SectionWrapper';
import styles from './Banner.module.scss';
import DefaultImg from './default-img.jpg';
import DefaultIcon from './default-icon.svg';

const Banner = (props) => {
    const {
        icon,
        heading,
        content,
    } = props;

    return (
        <div className={styles['banner-wrapper']}>

        {
            ((props.icon != null) || (props.heading != null) || (props.content != null)) ?
                <>
                    <SectionWrapper>
                        <div className={styles['banner']}>
                            {
                                props.icon != null ? (
                                <div className={styles['banner-icon']}>
                                    <Image width='90' height='90' layout='fixed' src={props.icon} alt={''} />
                                </div>
                                ) : <div className={styles['banner-icon']}><Image width='90' height='90' layout='fixed' src={DefaultIcon} alt={''} /></div>
                            }
                            {
                                props.heading != null ? (
                                <h2 className={'h2 ' + styles['banner-heading']}>
                                    {props.heading}
                                </h2>
                                ) : ''
                            }
                            {
                                props.children != null ? (
                                <div className={styles['banner-content']}>
                                    {props.children}
                                </div>
                                ) : ''
                            }

                        </div>
                    </SectionWrapper>
                    <Image
                        src={props.image != null ? props.image : DefaultImg}
                        layout='fill'
                        objectFit='cover'
                        alt={''}
                    />
                </>
                : <Image width='1440' height='570' layout='responsive' className={styles['banner-content-image']} src={props.image != null ? props.image : DefaultImg} alt={''} />
           }
        }
        </div>
    );
};

Banner.propTypes = {};

export default Banner;

