import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import DropDownAppointmentTypes from "../controls/dropdown-appointment-types";
import DropDownAvailabilityDates from "../controls/dropdown-availability-dates";

const Header = ({
  hamburgerMenuOpen,
  setHamburgerMenuOpen,
  packageSelected,
  setPackageSelected,
  packages,
}) => {
  const [navbarActive, setNavbarActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", UpdateNavBar);
    return () => window.removeEventListener("scroll", UpdateNavBar);
  }, []);
  const UpdateNavBar = () => {
    window.scrollY >= 54 ? setNavbarActive(true) : setNavbarActive(false);
  };
  const OpenFlyOutMenu = () => {
    if (!hamburgerMenuOpen) {
      document.body.classList.add("no_scroll");
      setHamburgerMenuOpen(true);
    } else {
      document.body.classList.remove("no_scroll");
      setHamburgerMenuOpen(false);
    }
  };
  const CloseFlyOutMenu = () => {
    document.body.classList.remove("no_scroll");
    setHamburgerMenuOpen(false);
  };
  return (
    <header
      className={`${styles.header} animate-pop-in animation-delay ${
        navbarActive ? styles.navbar_active : ""
      }`}
    >
      <section className={`logo ${styles.logo}`}>
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
        <div className={`name ${styles.name}`}>Hello Love</div>
      </section>
      <nav
        className={`${styles.nav} ${
          hamburgerMenuOpen ? styles.hamburger_menu_open : ""
        }`}
        onClick={OpenFlyOutMenu}
      >
        <div className={styles.burger}></div>
      </nav>
      <section
        className={`${styles.fly_out_menu} ${
          hamburgerMenuOpen ? styles.fly_out_menu_active : ""
        }`}
      >
        <div
          id="fly_out_menu_close"
          className={styles.fly_out_menu_close}
          onClick={CloseFlyOutMenu}
        ></div>
        <section className={`${styles.fly_out_menu_logo} flow`}>
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
          <div className={styles.name}>Hello Love</div>
          <div className={styles.copy}>
            You're only moments away from scheduling the experience of a
            lifetime! If you have any questions along your journey,
            <a
              className={styles.link}
              href="mailto:Jessica@hellolove.life?subject=Inquiry from our website"
            >
              &nbsp;reach out to us
            </a>
            !
          </div>
        </section>
        <section className={`${styles.fly_out_menu_body} ${styles.flow}`}>
          {!packageSelected.price && <p>{packageSelected.name}</p>}
          {packageSelected.price && (
            <>
              <p>
                We would love to book a {packageSelected.name} package for you.
                We are currently not booking appointments online.
              </p>
              <p>Please call the number below to book your appointment.</p>
            </>
          )}
          <a className={styles.link} href="tel:6235566767">
            <address>(623) 556-6767</address>
          </a>
        </section>
        <section className={styles.fly_out_menu_footer}>
          <div className={styles.heading}>FOLLOW US</div>
          <section className={styles.contact_social}>
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
        </section>
      </section>
    </header>
  );
};

export default Header;
