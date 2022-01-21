import React from 'react';
import PropTypes from 'prop-types';

import styles from './IconTextLinkGroup.module.scss';

import IconTextLink from './IconTextLink';
import SectionWrapper from '../global/SectionWrapper';

const IconTextLinkGroup = (props) => {
    const { isDarkBackground, items } = props.sectionData;

    const alterstyle = isDarkBackground != null ? styles['alternative'] : '';

    return (
        <SectionWrapper options={props.wrapperOptions}>
            <div
                className={`${styles['link-group-blocks-wrapper']} ${alterstyle}`}
            >
                {items != null && items.length != 0
                    ? items.map((item, i) => (
                          <IconTextLink
                              key={i}
                              icon={item['icon']}
                              heading={item['heading']}
                              linkText={item['linkText']}
                              linkUrl={item['linkTo']}
                          >
                              {item['content']}
                          </IconTextLink>
                      ))
                    : ''}
            </div>
        </SectionWrapper>
    );
};

IconTextLinkGroup.propTypes = {};

IconTextLinkGroup.defaultProps = {
    data: null,
};

export default IconTextLinkGroup;
