import {
    Button,
    Header,
    Card,
    CardContent,
    CardMedia,
    RegisterInterestCard,
    ProfileCard,
    PageHeader,
} from '../components/global';
import Footer from '../components/global/Footer';

import style from '../styles/pages/components.module.scss';

import ProgramCard from '../components/ProgramCard/';
import { InfoGrid } from '../components/InfoGrid/';
import BlogPostCard from '../components/BlogPostCard/';
import FAQAccordion from '../components/FAQAccordion/';
import TextImageCard from '../components/TextImageCard/';
import TimelineCard from '../components/TimelineCard/';
import USPBanner from '../components/USPBanner/';
import HomeHero from '../components/HomeHero/';
import QuoteBlock from '../components/QuoteBlock/';
import SponsorBlock from '../components/SponsorBlock/';
import StatisticsBlock from '../components/StatisticsBlock/';

export default function Components() {
    const spacedContainerClass = [
        style['container'],
        style['container--space-item'],
    ].join(' ');
    const gridContainerClass = [
        style['container'],
        style['container--grid'],
    ].join(' ');

    return (
        <div className={style['page-wrapper']}>
            <h1 className='h1'>Components</h1>
            <div className={style['page-nav']}>
                <a href='#buttons'>Buttons</a>
                <a href='#buttons-link'>Buttons as link</a>
                <a href='#cards'>Cards</a>
                <a href='#page-header'>Header</a>
                <a href='#page-header-banner'>Page Header</a>
            </div>
            <div>
                <h2 className='h2' id='buttons'>
                    Buttons
                </h2>
                <div className={spacedContainerClass}>
                    <h3 className='h5'>Small Buttons</h3>
                    <div className={style['container__row']}>
                        <Button size='small'>Button</Button>
                        <Button variant='1' size='small'>
                            Button
                        </Button>
                        <Button variant='2' size='small'>
                            Button
                        </Button>
                        <Button variant='3' size='small'>
                            Button
                        </Button>
                        <Button variant='4' size='small'>
                            Button
                        </Button>
                        <Button variant='5' size='small'>
                            Button
                        </Button>
                    </div>
                    <h3 className='h5'>Regular Buttons</h3>
                    <div className={style['container__row']}>
                        <Button>Button</Button>
                        <Button variant='1'>Button</Button>
                        <Button variant='2'>Button</Button>
                        <Button variant='3'>Button</Button>
                        <Button variant='4'>Button</Button>
                        <Button variant='5'>Button</Button>
                    </div>
                    <h3 className='h5'>Big Buttons</h3>
                    <div className={style['container__row']}>
                        <Button size='large'>Button</Button>
                        <Button variant='1' size='large'>
                            Button
                        </Button>
                        <Button variant='2' size='large'>
                            Button
                        </Button>
                        <Button variant='3' size='large'>
                            Button
                        </Button>
                        <Button variant='4' size='large'>
                            Button
                        </Button>
                        <Button variant='5' size='large'>
                            Button
                        </Button>
                    </div>
                </div>

                <h2 className='h2' id='buttons-link'>
                    Links as button
                </h2>
                <div className={spacedContainerClass}>
                    <Button to='#'>Anchor</Button>
                    <Button to='/'>To Homepage</Button>
                    <Button to='https://www.google.com' isExternalLink>
                        To Google
                    </Button>
                    <Button to='#' variant='1'>
                        Anchor
                    </Button>
                    <Button to='#' variant='2'>
                        Anchor
                    </Button>
                    <Button to='#' variant='3'>
                        Anchor
                    </Button>
                    <Button to='#' variant='4'>
                        Anchor
                    </Button>
                    <Button to='#' variant='5'>
                        Anchor
                    </Button>
                </div>
            </div>

            <div>
                <h2 className='h2' id='cards'>
                    Cards
                </h2>
                <div className={gridContainerClass}>
                    <Card style={{ maxWidth: '40rem' }}>
                        <CardContent>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Default Card Content
                            </h3>
                            <p>
                                Default cart content have 25px padding in mobile
                                and grows to 32px in viewport larger than 768px
                            </p>
                            <Button variant='1' size='small'>
                                Button
                            </Button>
                        </CardContent>
                    </Card>

                    <Card style={{ maxWidth: '40rem' }}>
                        <CardContent spaced>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Spaced Card Content
                            </h3>
                            <p>
                                Spaced cart content have 25px padding in mobile
                                and grows to 55px in viewport larger than 768px
                            </p>
                            <Button variant='1' size='small'>
                                Button
                            </Button>
                        </CardContent>
                    </Card>

                    <Card style={{ maxWidth: '40rem' }}>
                        <CardContent compact>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Compact Card Content
                            </h3>
                            <p>
                                Spaced cart content have 25px padding in all
                                viewport
                            </p>
                            <Button variant='1' size='small'>
                                Button
                            </Button>
                        </CardContent>
                    </Card>

                    <Card style={{ maxWidth: '40rem' }}>
                        <CardMedia>
                            <img src='https://images.unsplash.com/photo-1518604666860-9ed391f76460' />
                        </CardMedia>
                        <CardContent compact>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Card with media
                            </h3>
                            <p>
                                The media wrapper image by default have cover
                                behavior
                            </p>
                            <Button variant='1' size='small'>
                                Button
                            </Button>
                        </CardContent>
                    </Card>
                    <Card style={{ maxWidth: '40rem' }}>
                        <CardContent compact>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Card with media
                            </h3>
                            <p>The media wrapper can come after the content</p>
                        </CardContent>
                        <CardMedia>
                            <img src='https://images.unsplash.com/photo-1518604666860-9ed391f76460' />
                        </CardMedia>
                    </Card>

                    <Card style={{ maxWidth: '40rem' }}>
                        <CardMedia spaced>
                            <img src='https://images.unsplash.com/photo-1518604666860-9ed391f76460' />
                        </CardMedia>
                        <CardContent compact>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Card with media
                            </h3>
                            <p>Media wrapper can have paddings</p>
                            <Button variant='1' size='small'>
                                Button
                            </Button>
                        </CardContent>
                    </Card>

                    <Card style={{ maxWidth: '40rem' }} horizontal>
                        <CardMedia>
                            <img src='https://images.unsplash.com/photo-1518604666860-9ed391f76460' />
                        </CardMedia>
                        <CardContent compact>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Card with media, horizontal
                            </h3>
                            <p>Card can be horizontal in desktop</p>
                            <Button variant='1' size='small'>
                                Button
                            </Button>
                        </CardContent>
                    </Card>

                    <Card style={{ maxWidth: '40rem' }} horizontal>
                        <CardMedia spaced>
                            <img src='https://images.unsplash.com/photo-1518604666860-9ed391f76460' />
                        </CardMedia>
                        <CardContent compact>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Card with media, horizontal
                            </h3>
                            <p>Combined with spaced media wrapper</p>
                            <Button variant='1' size='small'>
                                Button
                            </Button>
                        </CardContent>
                    </Card>

                    <Card style={{ maxWidth: '40rem' }} horizontal>
                        <CardContent compact>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Card with media, horizontal
                            </h3>
                            <p>Order can be flipped</p>
                            <Button variant='1' size='small'>
                                Button
                            </Button>
                        </CardContent>
                        <CardMedia>
                            <img src='https://images.unsplash.com/photo-1518604666860-9ed391f76460' />
                        </CardMedia>
                    </Card>

                    <Card style={{ maxWidth: '40rem' }} horizontalReverse>
                        <CardMedia>
                            <img src='https://images.unsplash.com/photo-1518604666860-9ed391f76460' />
                        </CardMedia>
                        <CardContent compact>
                            <h3 className='h4' style={{ marginTop: 0 }}>
                                Card with media, horizontal reversed
                            </h3>
                            <p>
                                Horizontal reversed, meaning that it would be
                                reverse order compared to mobile order
                            </p>
                            <Button variant='1' size='small'>
                                Button
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div>
                <h2 className='h2'>Specialised Cards</h2>
                <div className={spacedContainerClass}>
                    <div className={style['container__row']}>
                        <RegisterInterestCard />
                    </div>
                    <div
                        className={style['container__row']}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            justifyContent: 'center',
                            alignItems: 'start'
                        }}>
                        <ProfileCard
                            style={{maxWidth: '40rem'}}
                            data={{
                            //image: 'https://source.unsplash.com/random/500×500',
                                name: 'John Doe',
                                title: 'Title or Position',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum sapien.'
                            }}
                        />

                        <ProfileCard
                            style={{maxWidth: '40rem'}}
                            data={{
                            //image: 'https://source.unsplash.com/random/500×500',
                                name: 'John Doe',
                                title: 'Title or Position',
                            }}
                        />

                        <ProfileCard
                            style={{maxWidth: '40rem'}}
                            data={{
                            //image: 'https://source.unsplash.com/random/500×500',
                                name: 'John Doe',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum sapien.'
                            }}
                        />

                    </div>

                </div>
            </div>

            <div>
                <h2 className='h2' id='page-header-banner'>
                    Page Header/Banner
                </h2>
                <div className={spacedContainerClass}>
                    <div className={style['container__row']}>
                        <PageHeader title="Components Page" />
                    </div>
                    <div className={style['container__row']}>
                        <PageHeader title="Components Page" bgMobile="../public/logo-text-light.png" id="page-header-change-bg"/>
                    </div>
                </div>

            </div>

            <div>
                <h2 className='h2' id='page-header'>
                    Header
                </h2>
                <div className={style['container']}>
                    <Header />
                </div>
            </div>
            <div>
                <h2 className='h2' id='page-header'>
                    Footer
                </h2>
                <div className={style['container']}>
                    <Footer />
                </div>
            </div>


            <div>
                <h2>Program Card</h2>
                <div className={style['container']}>
                    <ProgramCard
                        //image={Image}
                        name="RFI Initiation Program"
                        tags={['ages: 10 - 17', 'beginner']}
                        description="For players born 2011 and after, who wish to get started in football and advance quickly."
                        cta="Learn More"
                        link="#"
                    ></ProgramCard>
                </div>
            </div>
            <div>
                <h2>Info Grid</h2>
                <div className={style['container']}>
                    <InfoGrid></InfoGrid>
                </div>
            </div>

            <div>
                <h2>FAQ Accordion</h2>
                <div className={style['container']}>
                    <FAQAccordion
                        faqlists={
                            [
                                {
                                    question: 'How is the RFI Development Program structured?',
                                    answer: 'this is test 1'
                                },
                                {
                                    question: 'What is RFI’s approach?',
                                    answer: 'Our approach is to focus on the individual, within the natural team setting and game environment. Our mentality is to focus on the individual, within the natural team setting and game environment.'
                                }
                            ]
                        }
                    >
                    </FAQAccordion>
                </div>
            </div>

            <div>
                <h2>Sponsor Block</h2>
                <div className={style['container']}>
                    <SponsorBlock
                        heading="Proudly supported by"
                        sponsorGold={
                            [
                                {
                                    name: 'Relab',
                                    image: ''
                                },
                                {
                                    name: 'Sponsor 1',
                                    image: ''
                                }
                            ]
                        }
                        sponsorSilver={
                            [
                                {
                                    name: 'Test1',
                                    image: ''
                                },
                                {
                                    name: 'Test2',
                                    image: ''
                                }
                            ]
                        }
                        button1Text="Become a sponsor"
                        button1Link="#"
                        button2Text="More about our sponsor"
                        button2Link="#"
                    >
                        This is description
                    </SponsorBlock>
                </div>
            </div>

            <div>
                <h2>Text Image Card - Story</h2>
                <div className={style['container']}>
                    <TextImageCard
                        //image="https://source.unsplash.com/random/300×300"
                        heading="Becoming Melbourne City's second youngest debutant"
                        buttonLink="http://www.google.com.au"
                        buttonText="Test"
                    >
                        <p>
                            Max spent his key development years at RFI, where he established himself as a leading talent in Melbourne. Together with his teammates from childhood at RFI, he bossed the NPL system until he was recruited by Melbourne City. For us it's not surprising that at the tender age of 15 he’s already an outstanding talent, we know he will soon represent Australia and serves as an inspiration to the current RFI players.
                        </p>
                        <p>this is a test</p>
                    </TextImageCard>

                    <TextImageCard
                        isImageOnRight
                        isVerticalCentreAlign
                        preHeading="Development"
                        heading="Becoming Melbourne City's second youngest debutant"
                        buttonLink="http://www.google.com.au"
                        buttonText="Test"
                    >
                        <p>
                            Max spent his key development years at RFI, where he established himself as a leading talent in Melbourne. Together with his teammates from childhood at RFI, he bossed the NPL system until he was recruited by Melbourne City. For us its not surprising that at the tender age of 15 hes already an outstanding talent, we know he will soon represent Australia and serves as an inspiration to the current RFI players.
                        </p>
                        <p>this is a test</p>
                    </TextImageCard>
                </div>
            </div>


            <div>
                <h2>Timeline Card</h2>
                <div className={style['container']}>
                    <TimelineCard
                        date="2021"
                        heading="test heading"
                    >
                        <p>
                            Our young players have progressed into elite pathways and have been dominating the competitions every year, making RFI the most prolific player development program in Melbourne.
                        </p>
                        <p>this is a test</p>
                    </TimelineCard>

                </div>
            </div>




            <div>
                <h2>USP Banner</h2>
                <div className={style['container']}>
                    <USPBanner
                        data={
                            [
                                {
                                    icon: 'icon1',
                                    description: 'Who could you become? With a number of different programs in RFI, the opportunities to train like a pro player continue to grow and evolve.'
                                },
                                {
                                    icon: 'icon2',
                                    description: 'adfasdfasdf'
                                }
                            ]
                        }
                    />
                </div>
            </div>


            <div>
                <h2>Home Hero</h2>
                <div className={style['container']}>
                    <HomeHero
                        //image="https://source.unsplash.com/random/300×300"
                        button1Text="Learn more"
                        button1Link="#"
                        button2Text="Register Interest"
                        button2Link="#"
                    >
                        The Future of Youth Football Development
                    </HomeHero>
                </div>
            </div>


            <div>
                <h2>Quote Block</h2>
                <div className={style['container']}>
                    <QuoteBlock
                        avatar="https://source.unsplash.com/random/300×300"
                        author="Santiago Ortiz"
                        role="Coach, RFI"
                    >
                        A LOT OF MEMORIES COME TO MY MIND AS A PLAYER, COACH, OR FAN. THE BEST ONES ARE THOSE WHICH I LIVED AND SHARED WITH PEOPLE.
                    </QuoteBlock>
                </div>
            </div>

            <div>
                <h2>Statistics Block</h2>
                <div className={style['container']}>
                    <StatisticsBlock
                        heading="Real Success"
                        statsData={
                            [
                                {
                                    number: '300+',
                                    content: 'RFI Player'
                                },
                                {
                                    number: '120',
                                    content: 'Players at A-League Academies'
                                },
                                {
                                    number: '7',
                                    content: 'Players ademies'
                                }
                            ]
                        }
                    >
                        Our programs have been helping players with some amazing success stories.
                    </StatisticsBlock>
                </div>
            </div>


        </div>
    );
}
