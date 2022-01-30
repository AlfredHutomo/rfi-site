import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import ProgramList from '../../components/sections/ProgramList/';
import TextBlock from '../../components/sections/TextBlock';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import PageHeader from '../../components/global/PageHeader';
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

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'programs' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default Programs;
