import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import ProgramList from '../../components/ProgramList/';
import TextBlock from '../../components/sections/TextBlock';
import RegisterInterestCard from '../../components/RegisterInterestCard';
import PageHeader from '../../components/global/PageHeader';
import Breadcrumb from '../../components/Breadcrumb';

import { getPageData, getLayoutData } from '../../utils/api';

const Programs = ({ pageData, layoutData }) => {
    const [headerBanner, textBlock1, programs] = pageData.attributes.content;

    return (
        <PageWrapper layoutData={layoutData}>
            <PageHeader title={headerBanner.banner_text} />

            <Breadcrumb
                sectionData={{
                    data: [
                        {
                            text: 'Home',
                            link: '/',
                        },
                        {
                            text: 'Programs',
                            link: '/programs',
                        },
                    ],
                }}
            />

            <TextBlock sectionData={textBlock1}></TextBlock>

            <ProgramList sectionData={programs} />

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>
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
