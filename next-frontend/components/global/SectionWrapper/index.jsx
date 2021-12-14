import styles from './sectionWrapper.module.scss';
import PropTypes from 'prop-types';

const SectionWrapper = (props) => {
    const { bgcolor, noPadding } = props;

    return (
        <div
            className={noPadding ? '' : styles['section-wrapper']}
            style={{ backgroundColor: bgcolor }}
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
