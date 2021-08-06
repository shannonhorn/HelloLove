import styles from "../styles/Packages.module.css";

const Packages = ({
  packages,
  hamburgerMenuOpen,
  setHamburgerMenuOpen,
  setPackageSelected,
}) => {
  const SelectPackage = (event) => {
    if (!hamburgerMenuOpen) {
      document.body.classList.add("no_scroll");
      setHamburgerMenuOpen(true);
    } else {
      document.body.classList.remove("no_scroll");
      setHamburgerMenuOpen(false);
    }
    setPackageSelected(packages.find((item) => item.id == event.target.id));
  };
  return (
    <section className={styles.packages}>
      <a id="packages-and-pricing"></a>
      <div className="copy-container flow">
        <h2>PACKAGES</h2>
        <section className={styles.packages_container}>
          {packages.map((currentPackage) => (
            <article key={currentPackage.id} className={styles.package}>
              <div
                className={`${styles.package_name} ${
                  currentPackage.name.includes("Premium")
                    ? styles.package_premium
                    : ""
                }`}
              >
                {currentPackage.name}
              </div>
              <div className={`${styles.package_body_container} flow`}>
                <div className={styles.package_body_title}>What's Included</div>
                <div className={styles.package_body}>
                  {currentPackage.description}
                </div>
                <h3 className={`price ${styles.package_price}`}>
                  ${currentPackage.price}
                </h3>
                <a
                  id={currentPackage.id}
                  className={`btn btn-primary ${styles.btn_select_package}`}
                  href="#"
                  onClick={SelectPackage}
                >
                  Select This Package
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Packages;
