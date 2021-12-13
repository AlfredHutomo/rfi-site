import styles from './sectionWrapper.module.scss';
import PropTypes from 'prop-types';

const SectionWrapper = (props) => {
    const { bgcolor, padding } = props;

    return (
        <div
            className={padding ? styles['section-wrapper'] : ''}
            style={{ backgroundColor: props.bgcolor }}
        >
            <div className={styles['section-content']}>{props.children}</div>
        </div>
    );
};

SectionWrapper.propTypes = {
    bgcolor: PropTypes.string,
    padding: PropTypes.bool,
};

SectionWrapper.defaultProps = {
    padding: true,
};

export default SectionWrapper;
