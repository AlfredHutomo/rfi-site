import styles from './sectionWrapper.module.scss';
import PropTypes from 'prop-types';

const SectionWrapper = (props) => {
    const { bgcolor, spaceTop, spaceBtm, isTwoColumns } = props;

    let sectionStyle = { backgroundColor: props.bgcolor };

    if(props.spaceTop) {
        sectionStyle = { ...sectionStyle, paddingTop: props.spaceTop + 'px' }
    }

    if(props.spaceBtm) {
        sectionStyle = { ...sectionStyle, paddingBottom: props.spaceBtm + 'px' }
    }

    return (
        <div
            className={styles['section-wrapper']}
            style={sectionStyle}
        >
            <div className={`${styles['section-content']} ${isTwoColumns ? styles['section-content-in-cols'] : ''}`}>
                {props.children}
            </div>
        </div>
    );
};

SectionWrapper.propTypes = {
    bgcolor: PropTypes.string,
    isTwoColumns: PropTypes.bool,
};

SectionWrapper.defaultProps = {
    bgcolor: '#E5E5E5',
    isTwoColumns: false,
};

export default SectionWrapper;

