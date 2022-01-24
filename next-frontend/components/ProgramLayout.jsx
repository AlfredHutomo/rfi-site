import HeroBanner from './HeroBanner';
import ProfileCardList from './ProfileCardList';
import ProgramDetailTiles from './ProgramDetailTiles';

const ProgramLayout = ({ programData, children }) => {
    const headerData = {
        bgImageDesktop: programData.attributes.coverImage,
        bgImageMobile: programData.attributes.coverImage,
        heading: programData.attributes.name,
        button2: {
            text: 'Register Your Interest',
            url: '#',
        },
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
            {coachData.people.length > 0 && (
                <ProfileCardList sectionData={coachData} />
            )}
        </>
    );
};

export default ProgramLayout;
