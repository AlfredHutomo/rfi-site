import styles from './sectionWrapper.module.scss';
import PropTypes from 'prop-types';

/*  
    NOTE:
    New work-around to prevent the anomaly when options are added 
    the section wrapper the default props are removed
    This is because the default props are only maintained shallowly 
*/

const SectionWrapper = ({ children, options }) => {
    return <Wrapper {...options}>{children}</Wrapper>;
};

SectionWrapper.propTypes = {
    options: PropTypes.object,
};

SectionWrapper.defaultProps = {
    options: {},
};

const Wrapper = ({ bgcolor, spaceTop, spaceBtm, isTwoColumns, children }) => {
    let sectionStyle = {
        backgroundColor: bgcolor || Wrapper.defaultProps.bgcolor,
    };

    if (spaceTop) {
        sectionStyle = { ...sectionStyle, paddingTop: spaceTop + 'px' };
    }

    if (spaceBtm) {
        sectionStyle = {
            ...sectionStyle,
            paddingBottom: spaceBtm + 'px',
        };
    }

    return (
        <div className={styles['section-wrapper']} style={sectionStyle}>
            <div
                className={`${styles['section-content']} ${
                    isTwoColumns ? styles['section-content-in-cols'] : ''
                }`}
            >
                {children}
            </div>
        </div>
    );
};

Wrapper.propTypes = {
    bgcolor: PropTypes.string,
    spaceTop: PropTypes.string,
    spaceBtm: PropTypes.string,
    isTwoColumns: PropTypes.bool,
};

Wrapper.defaultProps = {
    bgcolor: '#e2e2e2',
    isTwoColumns: false,
};

export default SectionWrapper;
