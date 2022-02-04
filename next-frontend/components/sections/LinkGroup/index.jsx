import React from 'react';
import PropTypes from 'prop-types';

import styles from './LinkGroup.module.scss';
import Link from 'next/link';
import { SectionWrapper } from '../../global';

const LinkGroup = (props) => {
    const { heading, data } = props;

    return (
        <SectionWrapper>
            <div className={styles['link-group-wrapper']}>
                {props.heading != null ? (
                    <div className={styles['link-group-header']}>
                        <h3 className={'h3 ' + styles['link-group-heading']}>{props.heading}</h3>
                    </div>
                ) : (
                    ''
                )}
                <div className={styles['link-group-main']}>
                    {props.data != null && props.data.length != 0
                        ? props.data.map((link, i) => (
                              <Link href={link.link} key={i}>
                                  <a className={styles['link-block-wrapper']}>
                                      {link['text']}
                                  </a>
                              </Link>
                          ))
                        : ''}
                </div>
            </div>
        </SectionWrapper>
    );
};

LinkGroup.propTypes = {};

LinkGroup.defaultProps = {
    data: null,
};

export default LinkGroup;
