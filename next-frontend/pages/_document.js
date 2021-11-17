/* _document.js
 * this file acts as the wrapper component replacing document html
 * can try to put external stylesheet, or sscripts her
 *
 */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Inter&family=Sora&display=swap'
                        rel='stylesheet'
                    />
                    {/* PWA primary color */}
                    <meta name='theme-color' content='#010a4f' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
