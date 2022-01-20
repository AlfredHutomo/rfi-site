import styles from './PageWrapper.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import delve from 'dlv';

const PageWrapper = ({ layoutData, children }) => {
    const header = delve(layoutData, 'header.data.attributes');
    const footer = delve(layoutData, 'footer.data.attributes');

    return (
        <div className={styles['page-wrapper']}>
            <Header headerData={header} />
            {children}
            <Footer footerData={footer} />
        </div>
    );
};

export default PageWrapper;
