import styles from './sectionWrapper.module.scss';
import PropTypes from 'prop-types';

const SectionWrapper = (props) => {
    const { bgcolor, spaceTop, spaceBtm, isTwoColumns } = props.options;

    let sectionStyle = { backgroundColor: bgcolor };

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
                {props.children}
            </div>
        </div>
    );
};

SectionWrapper.propTypes = {
    // bgcolor: PropTypes.string,
    // isTwoColumns: PropTypes.bool,
};

SectionWrapper.defaultProps = {
    options: {
        bgcolor: '#73f',
        isTwoColumns: false,
    },
};

export default SectionWrapper;
