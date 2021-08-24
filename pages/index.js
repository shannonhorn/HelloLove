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
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [packageSelected, setPackageSelected] = useState({
    name: "Select a package or call",
    price: undefined,
    dateToBook: undefined,
  });
  return (
    <>
      <Head>
        <title>Hello Love Ultrasound: Welcome Home</title>
        <script
          defer
          data-domain="hellolove.life"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <meta
          name="description"
          content="Hello Love offers 3D 4D 5D ultrasounds in Peoria Arizona. We are a full service ultrasound clinic providing superior images of your baby and expert customer service. Call today to schedule your appointment! (623) 556-6767"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a id="top"></a>
      <Header
        hamburgerMenuOpen={hamburgerMenuOpen}
        setHamburgerMenuOpen={setHamburgerMenuOpen}
        packageSelected={packageSelected}
        setPackageSelected={setPackageSelected}
        packages={appointmentTypes}
      />
      <section className={styles.wrapper}>
        <Marquee />
        <WhatWeDo />
        <Packages
          packages={appointmentTypes}
          hamburgerMenuOpen={hamburgerMenuOpen}
          setHamburgerMenuOpen={setHamburgerMenuOpen}
          setPackageSelected={setPackageSelected}
        />
        <Footer />
      </section>
    </>
  );
};

export default Home;
