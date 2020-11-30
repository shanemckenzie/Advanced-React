import Document, { Head, Main, NextScript } from 'next/Document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<app {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }

    render() {
        return (
            <html>
                <Head> {this.props.styleTags} </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

