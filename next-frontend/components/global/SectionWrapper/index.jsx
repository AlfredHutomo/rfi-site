import styles from './sectionWrapper.module.scss';

const SectionWrapper = (props) => {
    const wrapperStyle = {
        padding: '0 20px',
    };

    const contentStyle = {
        maxWidth: props.maxWidth ? '100%' : `${props.maxWidth}px`,
    };

    return (
        <div className='section-wrapper'>
            <div className='section-content'>{props.children}</div>
        </div>
    );
};

export default SectionWrapper;
