import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
        <html>
          <Head>
            <title>Next JS Awesome Kit</title>
            <link rel="stylesheet" href="/_next/static/style.css" />
            <body>
              <Main />
              <NextScript />
            </body>
          </Head>
        </html>
      )
  }
}