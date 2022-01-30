import PageWrapper from '../components/global/PageWrapper';
import Sections from '../components/sections';

import { getLayoutData, getPageData } from '../utils/api';

const ContactUs = ({ pageData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={pageData.attributes.content} />
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'contact-us' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default ContactUs;
