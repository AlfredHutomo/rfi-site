import React from 'react';
import PropTypes from 'prop-types';

import styles from './Breadcrumb.module.scss';
import Link from 'next/link';

const Breadcrumb = (props) => {

    const {
        data,
    } = props;


    return (
        <div className={styles['breadcrumb-wrapper']}>
            {
                (props.data != null && props.data.length != 0) ?
                    props.data.map((link, i) => (
                        <Link href={link.link}
                              key={i}
                        >
                            <a className={styles['breadcrumb-link']}>{link['text']}</a>
                        </Link>
                    )) : ''
            }
        </div>
    );
}

Breadcrumb.propTypes = {
}

Breadcrumb.defaultProps = {
    data: null,
}

export default Breadcrumb;

