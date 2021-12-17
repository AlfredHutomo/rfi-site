import React from 'react';
import PropTypes from 'prop-types';

import styles from './LinkGroupBlockRow.module.scss';

import LinkGroupBlock from '../LinkGroupBlock';

const LinkGroupBlockRow = (props) => {

    const {
        data,
    } = props;


    return (
        <div className={styles['link-group-blocks-wrapper']}>
            {
                (props.data != null && props.data.length != 0) ?
                    props.data.map((item, i) => (
                        <LinkGroupBlock
                            key={i}
                            icon={item['icon']}
                            heading={item['heading']}
                            linkText={item['linkText']}
                            linkUrl={item['linkUrl']}
                        >
                        </LinkGroupBlock>
                    )) : ''
            }
        </div>
    );
}

LinkGroupBlockRow.propTypes = {

}

LinkGroupBlockRow.defaultProps = {
    data: null,
}

export default LinkGroupBlockRow;

