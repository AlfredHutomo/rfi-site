import PageWrapper from '../../components/global/PageWrapper';
import SectionWrapper from '../../components/global/SectionWrapper';
import LinkGroup from '../../components/sections/LinkGroup';
import TextBlock from '../../components/sections/TextBlock';
import SponsorDetailBlock from '../../components/sections/SponsorDetailBlock';
import RegisterInterestCard from '../../components/sections/RegisterInterestCard';
import PageHeader from '../../components/global/PageHeader';
import { getPageData, getLayoutData } from '../../utils/api';

const Sponsors = ({ pageData, layoutData }) => {
    const [headerBanner, textBlock1, sponsorsDetails] =
        pageData.attributes.content;

    return (
        <PageWrapper layoutData={layoutData}>
            <PageHeader title={headerBanner.banner_text} />

            <TextBlock sectionData={textBlock1}></TextBlock>

            <SectionWrapper>
                <SponsorDetailBlock
                    sectionData={sponsorsDetails}
                    sponsorsData={[
                        {
                            type: 'Gold',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Gold',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Silver',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Bronze',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Bronze',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                        {
                            type: 'Bronze',
                            logo: '',
                            name: 'Relab Studios',
                            phone: 'RFI Initation Program 1',
                            email: '',
                            social: ['ages: 10 - 19', 'beginner'],
                        },
                    ]}
                ></SponsorDetailBlock>
            </SectionWrapper>

            <SectionWrapper>
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
            </SectionWrapper>

            <SectionWrapper>
                <RegisterInterestCard />
            </SectionWrapper>
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
