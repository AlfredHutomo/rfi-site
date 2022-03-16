import HeroBanner from './sections/HeroBanner';
import ProfileCardList from './sections/ProfileCardList';
import ProgramDetailTiles from './ProgramDetailTiles';
import RegisterInterestCard from './sections/RegisterInterestCard';
import FAQAccordion from './sections/FAQAccordion';

const ProgramLayout = ({ programData, children }) => {
    const headerData = {
        bgImageDesktop: programData.attributes.bgDesktop,
        bgImageMobile: programData.attributes.bgMobile,
        heading: programData.attributes.name,
        button2: programData.attributes.ctaButton,
        isContentOnRight: true,
    };

    const coachData = {
        heading: 'The Coach',
        people: programData.attributes.coaches,
    };

    const details = {
        venue: programData.attributes.venue,
        schedule: programData.attributes.schedule,
        disclamer: programData.attributes.disclamer,
    };

    return (
        <>
            <HeroBanner sectionData={headerData}>
                {programData.attributes.description}
            </HeroBanner>
            {children}
            <ProgramDetailTiles data={details} />
            {/* Only render if coach is set to program */}
            {programData.attributes.coaches.data?.length > 0 && (
                <ProfileCardList sectionData={coachData} />
            )}

            <RegisterInterestCard />
            {programData.attributes.faq && (
                <FAQAccordion sectionData={programData.attributes.faq} />
            )}
        </>
    );
};

export default ProgramLayout;
