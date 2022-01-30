import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import LinkGroup from '../../components/sections/LinkGroup';
import TextBlock from '../../components/sections/TextBlock';
import SponsorDetailBlock from '../../components/sections/SponsorDetailBlock';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import PageHeader from '../../components/global/PageHeader';
import { getPageData, getLayoutData } from '../../utils/api';
import Sections from '../../components/sections';

const Sponsors = ({ pageData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={pageData.attributes.content} />

            <LinkGroup
                data={[
                    {
                        text: 'History',
                        link: '#',
                    },
                    {
                        text: 'Philosophy',
                        link: '#',
                    },
                    {
                        text: 'Success stories',
                        link: '#',
                    },
                    {
                        text: 'Sponsors',
                        link: '#',
                    },
                    {
                        text: 'Success stories',
                        link: '#',
                    },
                ]}
            />

            <RegisterInterestCard />
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'sponsors' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default Sponsors;
