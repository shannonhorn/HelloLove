import styles from "../styles/Packages.module.css";

const Packages = ({ packages }) => {
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
                  data-package={currentPackage.id}
                  href="#"
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
