import styles from './PageWrapper.module.scss';

const PageWrapper = (props) => {

    return (
        <div className={styles['page-wrapper']}>
            {props.children}
        </div>
    );

};

export default PageWrapper;

