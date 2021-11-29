import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles, { bpMd } from './PageHeader.module.scss';

/**
 * PageHeader
 * wrapper component for page heading banner
 *
 * NOTE:
 * currently for specifying a certain background image for mobile or desktop
 * for page header, id is required to target the styling since we cannot use
 * inline styling media queries. Id is also used, under the assumption that
 * there might be another instance of this component in a same page
 */
const PageHeader = (props) => {
  const { title, className, id, bgDesktop, bgMobile, ...others } = props;

  const classes = clsx(
      styles['page-header'],
      className,
  );

  // extra styling if there's a custom background image used
  let extraStyling = '';

  if (bgDesktop) {
      extraStyling += `
          @media (min-width: ${bpMd}) {
              #${id} {
                  background-image: url('${bgDesktop}');
              }
          }
      `
  }
  if (bgMobile) {
      extraStyling += `
        @media(max-width: ${parseInt(bpMd.replace('px', '')) - 1}px) {
            #${id} {
                background-image: url('${bgMobile}');
            }
        }
      `
  }

  return (
    <>
        <div id={id} className={classes} {...others}>
            <h1 className={'h1 ' + styles['page-header__title']}>{title}</h1>
        </div>
        { bgMobile || bgDesktop ? <style>{extraStyling}</style> : '' }
    </>
  )
};

/* PageHeader default props */
PageHeader.defaultProps = {
  title: 'Page Title'
}

/* PageHeader Prop Types */
PageHeader.propTypes = {
  title: PropTypes.string,
  bgDesktop: PropTypes.string,
  bgMobile: PropTypes.string,
}

export default PageHeader;
