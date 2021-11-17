import Button from '../components/global/Button/';
import Header from '../components/global/Header/';

export default function Components() {
    const containerStyle = {
        padding: '2rem 6.5%',
    };
    const componentContainer = {
        padding: '1.5rem',
        background: '#efefef',
        border: '1px solid #ccc',
        borderRadius: '0.4rem',
    };

    return (
        <div style={containerStyle}>
            <h1>Components</h1>
            <div>
                <h2>Buttons</h2>
                <div style={componentContainer}>
                    <Button>Button</Button>
                    <br />
                    <br />
                    <Button variant='1'>Button</Button>
                    <br />
                    <br />
                    <Button variant='2'>Button</Button>
                    <br />
                    <br />
                    <Button variant='3'>Button</Button>
                    <br />
                    <br />
                    <Button variant='4'>Button</Button>
                    <br />
                    <br />
                    <Button variant='5'>Button</Button>
                    <br />
                    <br />
                </div>

                <h2>Bigger Buttons</h2>
                <div style={componentContainer}>
                    <Button size='large'>Button</Button>
                    <br />
                    <br />
                    <Button variant='1' size='large'>
                        Button
                    </Button>
                    <br />
                    <br />
                    <Button variant='2' size='large'>
                        Button
                    </Button>
                    <br />
                    <br />
                    <Button variant='3' size='large'>
                        Button
                    </Button>
                    <br />
                    <br />
                    <Button variant='4' size='large'>
                        Button
                    </Button>
                    <br />
                    <br />
                    <Button variant='5' size='large'>
                        Button
                    </Button>
                    <br />
                    <br />
                </div>

                <h2>Links as button</h2>
                <div style={componentContainer}>
                    <Button to='#'>Button</Button>
                    <br />
                    <br />
                    <Button to='#' variant='1'>
                        Button
                    </Button>
                    <br />
                    <br />
                    <Button to='#' variant='2'>
                        Button
                    </Button>
                    <br />
                    <br />
                    <Button to='#' variant='3'>
                        Button
                    </Button>
                    <br />
                    <br />
                    <Button to='#' variant='4'>
                        Button
                    </Button>
                    <br />
                    <br />
                    <Button to='#' variant='5'>
                        Button
                    </Button>
                    <br />
                    <br />
                </div>
            </div>
            <div>
                <h2>Header</h2>
                <div style={componentContainer}>
                    <Header />
                </div>
            </div>
        </div>
    );
}
