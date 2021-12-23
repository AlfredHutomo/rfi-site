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
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Sora:wght@400;700&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        href='https://fonts.googleapis.com/icon?family=Material+Icons'
                        rel='stylesheet'
                    ></link>
                    <link
                        href='https://fonts.googleapis.com/icon?family=Material+Icons+Outlined'
                        rel='stylesheet'
                    ></link>
                    <link
                        href='https://fonts.googleapis.com/icon?family=Material+Icons+Rounded'
                        rel='stylesheet'
                    ></link>
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
