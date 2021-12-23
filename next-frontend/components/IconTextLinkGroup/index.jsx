import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconTextLinkGroup.module.scss';

import IconTextLink from './IconTextLink';

const IconTextLinkGroup = (props) => {

    const {
        isDarkBackground,
        data,
    } = props;

    //const alterstyle = (isDarkBackground != null) ? styles['alternative'] : '';

    return (
        <div className={`${styles['link-group-blocks-wrapper']} ${props.isDarkBackground ? styles['alternative'] : ''}`}>
            {
                (props.data != null && props.data.length != 0) ?
                    props.data.map((item, i) => (
                        <IconTextLink
                            key={i}
                            icon={item['icon']}
                            heading={item['heading']}
                            linkText={item['linkText']}
                            linkUrl={item['linkUrl']}
                        >
                            {item['content']}
                        </IconTextLink>
                    )) : ''
            }
        </div>
    );
}

IconTextLinkGroup.propTypes = {
}

IconTextLinkGroup.defaultProps = {
    data: null,
}

export default IconTextLinkGroup;

