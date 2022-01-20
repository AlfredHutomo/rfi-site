import React from 'react';
import PropTypes from 'prop-types';

import styles from './Breadcrumb.module.scss';
import Link from 'next/link';
import SectionWrapper from '../global/SectionWrapper';

const Breadcrumb = (props) => {
    const { sectionData, wrapperOptions } = props;

    return (
        <SectionWrapper options={wrapperOptions}>
            <div className={styles['breadcrumb-wrapper']}>
                {sectionData.data != null && sectionData.data.length != 0
                    ? sectionData.data.map((link, i) => (
                          <Link href={link.link} key={i}>
                              <a className={styles['breadcrumb-link']}>
                                  {link['text']}
                              </a>
                          </Link>
                      ))
                    : ''}
            </div>
        </SectionWrapper>
    );
};

Breadcrumb.propTypes = {
    sectionData: PropTypes.object,
    wrapperOptions: PropTypes.object,
};

Breadcrumb.defaultProps = {
    sectionData: null,
};

export default Breadcrumb;
