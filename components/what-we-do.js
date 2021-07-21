import styles from "../styles/WhatWeDo.module.css";

const WhatWeDo = () => (
  <section className={`aurora ${styles.what_we_do}`}>
    <a id="what-we-do"></a>
    <div className="copy-container flow">
      <h2>WHAT WE DO</h2>
      <div>
        <p>
          Invite family and friends to share your magical and bonding experience
          while observing your baby in a relaxed and personalized session. Our
          studio specializes in elective 2D, 3D, and 4D ultrasound and fetal
          imaging.
        </p>
      </div>
      <ul className="flow">
        <li>
          <div className="list-step-number">01</div>
          <h3>GET AN EARLY GLYMPSE</h3>
          <p>Watch your little miracle move, yawn, blink, and even smile.</p>
        </li>
        <li>
          <div className="list-step-number">02</div>
          <h3>WHOSE RESEMBLANCE?</h3>
          <p>
            Find out whose features your baby has. Does your little one have
            mom's lips or dad's nose?
          </p>
        </li>
        <li>
          <div className="list-step-number">03</div>
          <h3>BOY OR GIRL?</h3>
          <p>Determine gender starting at 14 weeks.</p>
        </li>
      </ul>
      <a id="SelectAPackage" className="btn btn-primary" href="#">
        Select a Package
      </a>
    </div>
  </section>
);

export default WhatWeDo;
