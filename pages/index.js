import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Marquee from "../components/marquee";
import WhatWeDo from "../components/what-we-do";

const Home = () => (
  <>
    <Head>
      <script
        async
        defer
        data-domain="hellolove.life"
        src="https://plausible.io/js/plausible.js"
      ></script>
      <title>Hello Love Ultrasound: Welcome Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <section className={styles.wrapper}>
      <Marquee />
      <WhatWeDo />
    </section>
  </>
);

export default Home;
