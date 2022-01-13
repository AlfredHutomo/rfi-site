import styles from './sectionWrapper.module.scss';
import PropTypes from 'prop-types';

const SectionWrapper = (props) => {
    const { bgcolor, spaceTop, spaceBtm, isTwoColumns } = props;

    let sectionStyle = { backgroundColor: props.bgcolor };
    let sectionContentStyle = { display: 'flex' };

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
            <div className={`${styles['section-content']} ${styles['section-content-in-cols']}`}>
                {props.children}
            </div>
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
