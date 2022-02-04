import PageWrapper from '../components/global/PageWrapper';
import Sections from '../components/sections';

import { getLayoutData, getPageData } from '../utils/api';
import { checkForLayoutComponent } from '../utils/utils';

const ContactUs = ({ pageData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={pageData.attributes.content} />
        </PageWrapper>
    );
};

export const getServerSideProps = async (context) => {
    // let misc = [];
    // const specialLayout = await checkForLayoutComponent(
    //     pageData.attributes.content
    // );

    return {
        props: {
            pageData: await getPageData({ slug: 'contact-us' }),
            layoutData: await getLayoutData(),
        },
    };
};

export default ContactUs;
