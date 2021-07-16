import styles from "../styles/Marquee.module.css";

const Marquee = () => (
  <section className={`${styles.hero} animate-fade-in`}>
    <div
      className={`${styles.copy_container} copy-container flow animate-pop-in`}
    >
      <h1>Hello and congratulations!</h1>
      <p>
        Thank you for selecting <strong>Hello Love</strong> as your 3D/4D
        Ultrasound Clinic. We genuinely believe that seeing your baby in the
        womb should be an extraordinary opportunity.
      </p>
      <p>
        We look forward to providing you the ultimate experience in prenatal
        bonding.
      </p>
      <a
        id="LetsGetStarted"
        className="btn btn-primary animate-pop-in animation-delay"
        href="#"
      >
        Let's Get Started
      </a>
    </div>
  </section>
);

export default Marquee;
