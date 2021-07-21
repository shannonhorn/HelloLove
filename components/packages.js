import styles from "../styles/Packages.module.css";

const Packages = ({ packages }) => {
  console.log(packages);
  return (
    <section className={styles.packages}>
      <a id="packages-and-pricing"></a>
      <div className="copy-container flow">
        <h2>PACKAGES</h2>
        <section className={`${styles.packages_container} flow`}>
          {packages.map((currentPackage) => (
            <article key={currentPackage.id} className={styles.package}>
              <div className={styles.package_name}>{currentPackage.name}</div>
              <div className={`${styles.package_body} flow`}>
                {currentPackage.description}
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Packages;
