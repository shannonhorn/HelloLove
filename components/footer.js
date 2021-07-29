import { useState, useEffect } from "react";
import { useForm } from "@formspree/react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const [scrollToTopActive, setScrollToTopActive] = useState(false);
  const [state, handleSubmit] = useForm("xqkwdooz");
  useEffect(() => {
    window.addEventListener("scroll", UpdateScrollToTop);
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
      .querySelector(".scroll-to-top")
      .addEventListener("click", () => smoothScroll("#top", 400));
    return () => window.removeEventListener("scroll", UpdateScrollToTop);
  }, []);
  const UpdateScrollToTop = () => {
    window.scrollY >= 54
      ? setScrollToTopActive(true)
      : setScrollToTopActive(false);
  };
  return (
    <footer className={`${styles.footer} flow`}>
      <section className={`${styles.contact_subscribe} ${styles.flow}`}>
        <div className="banner">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Receive news, cool free stuff updates and new released products (no
            spam!)
          </p>
        </div>
        <form onSubmit={handleSubmit} className={styles.newsletter}>
          <fieldset>
            <label htmlFor="newsletter_email_address" className="clipped">
              Email Address
            </label>
            <input
              id="newsletter_email_address"
              name="newsletter_email_address"
              type="email"
              placeholder="Enter your email address"
            />
            <button type="submit" disabled={state.submitting}>
              SUBSCRIBE
            </button>
          </fieldset>
        </form>
        <div
          className={`newsletter—confirmation hide ${
            state.succeeded ? "show" : ""
          }`}
        >
          You’re all signed up, thank you!
        </div>
      </section>
      <section className={styles.flow}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`icon ${styles.icon}`}
        >
          <path
            d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
            strokeWidth="1.5"
          />
          <path
            d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className={styles.title}>ADDRESS</h3>
        <a href="https://www.google.com/maps/place/9200+W+Union+Hills+Dr+%23+103,+Peoria,+AZ+85382/@33.6528919,-112.2591489,17z/data=!3m1!4b1!4m5!3m4!1s0x872b42b98d46a009:0xbb5725de9108f3d2!8m2!3d33.6528875!4d-112.2569602">
          <address>
            9200 W Union Hills Dr
            <br />
            Suite A-103
            <br />
            Peoria AZ 85382
          </address>
        </a>
      </section>
      <section className={styles.flow}>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`icon ${styles.icon}`}
        >
          <path
            d="M6.87348 15.1266C4.04217 12.2953 4.04217 7.70484 6.87348 4.87354"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M17.1265 4.87354C19.9578 7.70484 19.9578 12.2953 17.1265 15.1266"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M15.0052 6.99475C16.6649 8.65448 16.6649 11.3454 15.0052 13.0052"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M8.9948 13.0052C7.33507 11.3454 7.33507 8.65448 8.9948 6.99475"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12.5 10C12.5 10.2761 12.2761 10.5 12 10.5C11.7239 10.5 11.5 10.2761 11.5 10C11.5 9.72386 11.7239 9.5 12 9.5C12.2761 9.5 12.5 9.72386 12.5 10Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M12 13.75V19.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <h3 className={styles.title}>WE'RE OPEN</h3>
        <p>7 days per week</p>
        <p>9:00 am - 5:00 pm</p>
      </section>
      <section className={styles.flow}>
        <svg viewBox="0 0 24 24" className={`icon ${styles.icon}`}>
          <circle
            cx="12"
            cy="12"
            r="3.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          ></circle>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C18.8125 4.75 19.25 9.125 19.25 12V13.25C19.25 14.3546 18.3546 15.25 17.25 15.25V15.25C16.1454 15.25 15.25 14.3546 15.25 13.25V8.75"
          ></path>
        </svg>
        <h3 className={styles.title}>EMAIL</h3>
        <a href="mailto:Jessica@hellolove.life?subject=Inquiry from our website">
          <address>Jessica@hellolove.life</address>
        </a>
      </section>
      <section className={styles.flow}>
        <svg viewBox="0 0 24 24" className={`icon ${styles.icon}`}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
          ></path>
        </svg>
        <h3 className={styles.title}>PHONE</h3>
        <a href="tel:6235566767">
          <address>(623) 556-6767</address>
        </a>
      </section>
      <section className={styles.flow}>
        <section className="logo">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="icon-heart-pulse"
          >
            <title>Hello Love heart pulse logo</title>
            <path d="M9.5 19c-0.084 0-0.167-0.021-0.243-0.063-0.116-0.065-2.877-1.611-5.369-4.082-0.196-0.194-0.197-0.511-0.003-0.707s0.511-0.197 0.707-0.003c1.979 1.962 4.186 3.346 4.908 3.776 0.723-0.431 2.932-1.817 4.908-3.776 0.196-0.194 0.513-0.193 0.707 0.003s0.193 0.513-0.003 0.707c-2.493 2.471-5.253 4.017-5.369 4.082-0.076 0.042-0.159 0.063-0.243 0.063z"></path>
            <path d="M1.279 11c-0.188 0-0.368-0.106-0.453-0.287-0.548-1.165-0.826-2.33-0.826-3.463 0-2.895 2.355-5.25 5.25-5.25 0.98 0 2.021 0.367 2.931 1.034 0.532 0.39 0.985 0.86 1.319 1.359 0.334-0.499 0.787-0.969 1.319-1.359 0.91-0.667 1.951-1.034 2.931-1.034 2.895 0 5.25 2.355 5.25 5.25 0 1.133-0.278 2.298-0.826 3.463-0.118 0.25-0.415 0.357-0.665 0.24s-0.357-0.415-0.24-0.665c0.485-1.031 0.731-2.053 0.731-3.037 0-2.343-1.907-4.25-4.25-4.25-1.703 0-3.357 1.401-3.776 2.658-0.068 0.204-0.259 0.342-0.474 0.342s-0.406-0.138-0.474-0.342c-0.419-1.257-2.073-2.658-3.776-2.658-2.343 0-4.25 1.907-4.25 4.25 0 0.984 0.246 2.006 0.731 3.037 0.118 0.25 0.010 0.548-0.24 0.665-0.069 0.032-0.141 0.048-0.212 0.048z"></path>
            <path d="M10.515 15c-0.005 0-0.009-0-0.013-0-0.202-0.004-0.569-0.109-0.753-0.766l-1.217-4.334-0.807 3.279c-0.158 0.643-0.525 0.778-0.73 0.8s-0.592-0.027-0.889-0.62l-0.606-1.211c-0.029-0.058-0.056-0.094-0.076-0.117-0.003 0.004-0.007 0.009-0.011 0.015-0.37 0.543-1.192 0.953-1.913 0.953h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.421 0 0.921-0.272 1.087-0.516 0.223-0.327 0.547-0.501 0.891-0.478 0.374 0.025 0.708 0.279 0.917 0.696l0.445 0.89 0.936-3.803c0.158-0.64 0.482-0.779 0.726-0.783s0.572 0.125 0.751 0.76l1.284 4.576 1.178-3.608c0.205-0.628 0.582-0.736 0.788-0.745s0.59 0.068 0.847 0.677l0.724 1.719c0.136 0.322 0.578 0.616 0.927 0.616h1.5c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-1.5c-0.747 0-1.559-0.539-1.849-1.228l-0.592-1.406-1.274 3.9c-0.207 0.634-0.566 0.733-0.771 0.733z"></path>
          </svg>
          <div className="name">Hello Love</div>
        </section>
        <section>
          <a href="https://www.facebook.com/helloloveultrasound">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`icon ${styles.icon}`}
            >
              <path
                d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="https://www.instagram.com/helloloveultrasound/">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`icon ${styles.icon}`}
            >
              <path
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                strokeWidth="1.5"
              />
              <path
                d="M17.5 6.51L17.51 6.49889"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>
        <div className={styles.copyright}>Hello Love &copy; 2021</div>
      </section>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`icon scroll-to-top ${styles.icon} ${styles.icon_arrow_up} ${
          scrollToTopActive ? styles.scroll_to_top_active : ""
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 10.25L12 4.75L6.75 10.25"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.25V5.75"
        ></path>
      </svg>
    </footer>
  );
};

export default Footer;
