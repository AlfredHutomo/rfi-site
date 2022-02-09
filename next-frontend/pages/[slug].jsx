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

export const getServerSideProps = async (context) => {
    return {
        props: {
            pageData: await getPageData({ slug: context.params.slug }),
            layoutData: await getLayoutData(),
        },
    };
};

export default ContactUs;
