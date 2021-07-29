import { useEffect } from "react";
import styles from "../styles/Marquee.module.css";

const Marquee = () => {
  useEffect(() => {
    const smoothScroll = (destination, duration) => {
      const target = document.querySelector(destination);
      const targetPosition = target.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      let startTime = null;

      const animateScroll = (currentTime) => {
        if (startTime === null) {
          startTime = currentTime;
        }
        let timeElapsed = currentTime - startTime;
        let runAnimation = easeInOutQuad(
          timeElapsed,
          startPosition,
          targetPosition,
          duration
        );
        window.scrollTo(0, runAnimation);
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      let easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    };
    document
      .querySelector("#LetsGetStarted")
      .addEventListener("click", () => smoothScroll("#what-we-do", 400));
  }, []);
  return (
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
};

export default Marquee;
