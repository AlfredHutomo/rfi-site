import PageWrapper from '../../components/global/PageWrapper';
import ProgramLayout from '../../components/ProgramLayout';

import Sections from '../../components/sections';

import RegisterInterestCard from '../../components/sections/RegisterInterestCard';

import {
    getLayoutData,
    getProgramsData,
    getProgramsPaths,
} from '../../utils/api';

const ProgramDetails = ({ programData, layoutData }) => {
    const sections = programData.attributes.content;

    return (
        <PageWrapper layoutData={layoutData}>
            <ProgramLayout programData={programData}>
                {/* Dynamic Sections */}
                <Sections sections={sections} />
            </ProgramLayout>
        </PageWrapper>
    );
};

// export const getStaticPaths = async () => {
//     const paths = await getProgramsPaths();

//     return {
//         paths,
//         fallback: false,
//     };
// };

export const getServerSideProps = async (context) => {
    const programData = await getProgramsData({ slug: context.params.slug });
    const layoutData = await getLayoutData();

    return {
        props: {
            programData,
            layoutData,
        },
        revalidate: 1,
    };
};

export default ProgramDetails;
