import PageWrapper from '../../components/global/PageWrapper';
import Sections from '../../components/sections';

import LinkGroup from '../../components/sections/LinkGroup';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';

import { getPageData, getLayoutData } from '../../utils/api';

const Team = ({ pageData, layoutData }) => {
    return (
        <PageWrapper layoutData={layoutData}>
            <Sections sections={pageData.attributes.content} />

            <LinkGroup
                heading='Learn more about RFI'
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
    const pageData = await getPageData({ slug: 'team' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default Team;
