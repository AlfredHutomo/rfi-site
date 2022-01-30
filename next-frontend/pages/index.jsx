import PageWrapper from '../components/global/PageWrapper';
import { getLayoutData, getPageData } from '../utils/api';

import Sections from '../components/sections';

const Home = ({ pageData, layoutData }) => {
    const { seo, content } = pageData.attributes;

    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={content} />
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'home' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
        revalidate: 60,
    };
};

export default Home;
