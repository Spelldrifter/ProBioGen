import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fa" dir="rtl">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="نوشتن بایو با چت جی پی تی" />
          <meta property="og:site_name" content="bio.ehsanghaffarii.ir" />
          <meta
            property="og:description"
            content="ساخت بایو برای شبکه های اجتماعی"
          />
  