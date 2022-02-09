import Router from 'next/router';
import nProgress from 'nprogress';

import '../styles/main.scss';
import '../styles/nprogress.scss';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
