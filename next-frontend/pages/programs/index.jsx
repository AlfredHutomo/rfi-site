import PageWrapper from '../../components/global/PageWrapper';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import Breadcrumb from '../../components/Breadcrumb';

import { getPageData, getLayoutData } from '../../utils/api';
import Sections from '../../components/sections';

const Programs = ({ pageData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={pageData.attributes.content} />
            <RegisterInterestCard />
        </PageWrapper>
    );
};

export const getServerSideProps = async (context) => {
    const pageData = await getPageData({ slug: 'programs' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
        revalidate: 1,
    };
};

export default Programs;
