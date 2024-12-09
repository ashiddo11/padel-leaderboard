import Document, {Html, Head, Main, NextScript} from 'next/document';
import Link from 'next/link';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Link rel="manifest" href="/manifest.json" />
          <Link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
          {/* <Link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
            crossOrigin="anonymous"
          /> */}

          <Link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
