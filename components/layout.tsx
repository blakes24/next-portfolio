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
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
