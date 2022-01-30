import PageWrapper from '../../components/global/PageWrapper';
import Sections from '../../components/sections';

import LinkGroup from '../../components/sections/LinkGroup';

import { getPageData, getLayoutData } from '../../utils/api';

const History = ({ pageData, layoutData }) => {
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
        </PageWrapper>
    );
};

export const getStaticProps = async (context) => {
    const pageData = await getPageData({ slug: 'history' });
    const layoutData = await getLayoutData();

    return {
        props: {
            pageData,
            layoutData,
        },
    };
};

export default History;
