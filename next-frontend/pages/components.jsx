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
        <div class={style['page-wrapper']}>
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
                                The media wrapper image by default have 'cover'
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
                                image: 'https://via.placeholder.com/350x300?text=PLACEHOLDER',
                                name: 'John Doe',
                                title: 'Title or Position',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum sapien.'
                            }}
                        />

                        <ProfileCard
                            style={{maxWidth: '40rem'}}
                            data={{
                                image: 'https://via.placeholder.com/350x300?text=PLACEHOLDER',
                                name: 'John Doe',
                                title: 'Title or Position',
                            }}
                        />

                        <ProfileCard
                            style={{maxWidth: '40rem'}}
                            data={{
                                image: 'https://via.placeholder.com/350x300?text=PLACEHOLDER',
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
        </div>
    );
}
