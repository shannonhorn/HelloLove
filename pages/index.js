import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Marquee from "../components/marquee";
import WhatWeDo from "../components/what-we-do";
import Packages from "../components/packages";
import GetSharedCredentials from "./api/SharedCredentials";
import Footer from "../components/footer";

export async function getStaticProps() {
  // fetch appointment types
  const appointmentTypeResponse = await fetch(
    `https://acuityscheduling.com/api/v1/appointment-types`,
    GetSharedCredentials()
  );
  const appointmentTypes = await appointmentTypeResponse.json();
  return { props: { appointmentTypes } };
}

const Home = (props) => {
  const [appointmentTypes, setAppointmentTypes] = useState(
    props.appointmentTypes.filter((type) => type.active && !type.private)
  );
  return (
    <>
      <Head>
        <title>Hello Love Ultrasound: Welcome Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a id="top"></a>
      <Header />
      <section className={styles.wrapper}>
        <Marquee />
        <WhatWeDo />
        <Packages packages={appointmentTypes} />
        <Footer />
      </section>
    </>
  );
};

export default Home;
