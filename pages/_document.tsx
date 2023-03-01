import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ReactElement } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document<{ styleTags: ReactElement[] }> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = await renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {this.props.styleTags}
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
