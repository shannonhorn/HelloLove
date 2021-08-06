import { useState } from "react";
import styles from "../styles/DropDownAppointmentTypes.module.css";

const DropDownAvailabilityDates = ({ packageSelected, setPackageSelected }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const selectItem = (item) => {
    console.log(item);
    toggle(!open);
  };
  return (
    <div className={styles.dd_wrapper} style={{zIndex:9}}>
      <div
        tabIndex={0}
        className={styles.dd_header}
        role="button"
        data-disabled={!packageSelected.price}
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div>
          {packageSelected.dateToBook
            ? packageSelected.dateToBook
            : "Select a package to book"}
        </div>
        {!open && (
          <svg viewBox="0 0 24 24">
            <path d="M15.25 10.75L12 14.25L8.75 10.75"></path>
          </svg>
        )}
        {open && (
          <svg viewBox="0 0 24 24">
            <path d="M15.25 14.25L12 10.75L8.75 14.25"></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default DropDownAvailabilityDates;
