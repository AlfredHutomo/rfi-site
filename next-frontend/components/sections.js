import PageHeader from './global/PageHeader';
import HeroBanner from './sections/HeroBanner';
import IconTextLinkGroup from './sections/IconTextLinkGroup';
import { InfoGrid, InfoGridTwo } from './sections/InfoGrid';
import LinkGroup from './sections/LinkGroup';
import PostList from './sections/PostList';
import ProfileCardList from './sections/ProfileCardList';
import ProgramList from './sections/ProgramList';
import RegisterInterestCard from './sections/RegisterInterestCard';
import Banner from './sections/Banner';
import FAQAccordion from './sections/FAQAccordion';
import QuoteBlock from './sections/QuoteBlock';
import TextBlock from './sections/TextBlock';
import SponsorBlock from './sections/SponsorBlock';
import SponsorDetailBlock from './sections/SponsorDetailBlock';
import StatisticsBlock from './sections/StatisticsBlock';
import TextImageCard from './sections/TextImageCard';
import TextTileBlockRow from './sections/TextTileBlockRow';
import Timeline from './sections/Timeline';
import USPBanner from './sections/USPBanner';
import ContactLayout from './sections/ContactLayout';
import RegisterLayout from './sections/RegisterLayout';
import IconTextTileGroup from './IconTextTileGroup';

// Map Strapi sections to section components
const sectionComponents = {
    ComponentSectionsHero: HeroBanner,
    ComponentSectionsOurPrograms: ProgramList,
    ComponentSectionsTestimonials: QuoteBlock,
    ComponentSectionsBlockContent: InfoGrid,
    ComponentSectionsPageBanner: PageHeader,
    ComponentSectionsTextImageBlock: TextImageCard,
    ComponentSectionsTextBlock: TextBlock,
    ComponentSectionsStatisticBlock: StatisticsBlock,
    // check
    ComponentSectionsLinkGroup: LinkGroup,
    // check
    ComponentSectionsSponsors: SponsorBlock,
    ComponentSectionsFaq: FAQAccordion,
    ComponentSectionsRegisterInterest: RegisterInterestCard,
    ComponentSectionsUspBanner: USPBanner,
    ComponentSectionsPeopleHighlightBlock: ProfileCardList,
    ComponentSectionsGridAboutUs: InfoGridTwo,
    ComponentSectionsIconTextLinkGroup: IconTextLinkGroup,
    ComponentSectionsIconTextTile: IconTextTileGroup,
    ComponentSectionsBanner: Banner,
    ComponentSectionsTimelineBlock: Timeline,
    ComponentSectionsSponsorsDetails: SponsorDetailBlock,
    ComponentSectionsTextTileRowBlock: TextTileBlockRow,
    ComponentSectionsBlogLists: PostList,
    // Layout Components
    ComponentLayoutContactUs: ContactLayout,
    ComponentLayoutRegister: RegisterLayout,
};

// Display a section individually
const Section = ({ sectionData }) => {
    // Prepare the component
    const SectionComponent = sectionComponents[sectionData.__typename];

    if (!SectionComponent) {
        return null;
    }

    // Display the section
    return <SectionComponent sectionData={sectionData} specialLayout={{}} />;
};

const Sections = ({ sections }) => {
    return (
        <div className='flex flex-col'>
            {/* Show the actual sections */}
            {sections.map((section, i) => (
                <Section
                    sectionData={section}
                    key={`${section.__typename}__${i}`}
                />
            ))}
        </div>
    );
};

export default Sections;
