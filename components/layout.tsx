import Navbar from "./Navbar";
import Head from "next/head";
import React from "react";
import Footer from "./Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Blakely Burns</title>
        <meta name="description" content="Blakely's developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Blakely Burns Portfolio" />
        <meta
          property="og:description"
          content="Blakely's developer portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.blakelyburns.com" />
        <meta
          property="og:image"
          content="https://www.blakelyburns.com/images/portfolio.png"
        />
      </Head>
      <Navbar />
      <>{children}</>
      <Footer />
    </>
  );
};

export default Layout;
