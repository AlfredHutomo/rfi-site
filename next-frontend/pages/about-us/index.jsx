import PageWrapper from '../../components/global/PageWrapper';
import Sections from '../../components/sections';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';

import { getPageData, getLayoutData } from '../../utils/api';

const AboutUs = ({ pageData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            {/* TODO: Breadcrumb is crumbly */}
            {/* <Breadcrumb
                sectionData={{
                    data: [
                        {
                            text: 'Home',
                            link: '/',
                        },
                        {
                            text: 'About Us',
                            link: '/about-us',
                        },
                    ],
                }}
            /> */}
            <Sections sections={pageData.attributes.content} />
            <RegisterInterestCard />
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'about-us' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default AboutUs;
