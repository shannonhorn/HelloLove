import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from '../components/header';

const Home = () => {
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
      <Header/>
    </>
  );
};

export default Home;
