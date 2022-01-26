import PageHeader from './global/PageHeader';
import HeroBanner from './HeroBanner';
import IconTextLinkGroup from './IconTextLinkGroup';
import { InfoGrid, InfoGridTwo } from './InfoGrid';
import LinkGroup from './LinkGroup';
import PostList from './PostList';
import ProfileCardList from './ProfileCardList';
import ProgramList from './ProgramList';
import RegisterInterestCard from './RegisterInterestCard';
import Banner from './sections/Banner';
import FAQAccordion from './sections/FAQAccordion';
import QuoteBlock from './sections/QuoteBlock';
import TextBlock from './sections/TextBlock';
import SponsorBlock from './SponsorBlock';
import SponsorDetailBlock from './SponsorDetailBlock';
import StatisticsBlock from './StatisticsBlock';
import TextImageCard from './TextImageCard';
import TextTileBlockRow from './TextTileBlockRow';
import TextTileBlock from './TextTileBlockRow/TextTileBlock';
import Timeline from './Timeline';
import USPBanner from './USPBanner';

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
    ComponentSectionsLinkGroup: LinkGroup,
    ComponentSectionsSponsors: SponsorBlock,
    ComponentSectionsFaq: FAQAccordion,
    ComponentSectionsRegisterInterest: RegisterInterestCard,
    ComponentSectionsUspBanner: USPBanner,
    ComponentSectionsPeopleHighlightBlock: ProfileCardList,
    ComponentSectionsGridAboutUs: InfoGridTwo,
    ComponentSectionsIconTextLinkGroup: IconTextLinkGroup,
    ComponentSectionsIconTextTile: TextTileBlock,
    ComponentSectionsBanner: Banner,
    ComponentSectionsTimelineBlock: Timeline,
    ComponentSectionsSponsorsDetails: SponsorDetailBlock,
    ComponentSectionsTextTileRowBlock: TextTileBlockRow,
    ComponentSectionsBlogLists: PostList,
};

// Display a section individually
const Section = ({ sectionData }) => {
    // Prepare the component
    const SectionComponent = sectionComponents[sectionData.__typename];

    if (!SectionComponent) {
        return null;
    }

    // Display the section
    return <SectionComponent sectionData={sectionData} />;
};

const Sections = ({ sections }) => {
    return (
        <div className='flex flex-col'>
            {/* Show the actual sections */}
            {sections.map((section) => (
                <Section
                    sectionData={section}
                    key={`${section.__typename}${section.id}`}
                />
            ))}
        </div>
    );
};

export default Sections;
