import styles from './sectionWrapper.module.scss';
import PropTypes from 'prop-types';

const SectionWrapper = (props) => {
    const { bgcolor, spaceTop, spaceBtm } = props;

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
            <div className={styles['section-content']}>{props.children}</div>
        </div>
    );
};

SectionWrapper.propTypes = {
    bgcolor: PropTypes.string,
    noPadding: PropTypes.bool,
};

SectionWrapper.defaultProps = {
    bgcolor: '#E5E5E5',
    noPadding: false,
};

export default SectionWrapper;
