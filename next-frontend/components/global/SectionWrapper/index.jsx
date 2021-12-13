import styles from './sectionWrapper.module.scss';

const SectionWrapper = (props) => {

    const {
        bgcolor
    } = props;


    const wrapperStyle = {
        //padding: '0 20px',
    };


    return (
        <div className={styles['section-wrapper']} style={{ backgroundColor: props.bgcolor }}>
            <div className={styles['section-content']}>
                {props.children}
            </div>
        </div>
    );
};


export default SectionWrapper;

