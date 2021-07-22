import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Marquee from "../components/marquee";
import WhatWeDo from "../components/what-we-do";
import Packages from "../components/packages";
import useSWR from "swr";
import GetSharedCredentials from "./api/SharedCredentials";

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
  const { data, error, isValidating } = useSWR("/api/appointment-types", {
    initialData: props.appointmentTypes,
  });
  return (
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
        <Packages packages={props.appointmentTypes.filter(
            (type) => type.active && !type.private
          )} />
      </section>
    </>
  );
};

export default Home;
