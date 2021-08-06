import { useState } from "react";
import styles from "../styles/DropDownAppointmentTypes.module.css";
import onClickOutside from "react-onclickoutside";

const DropDownAppointmentTypes = ({
  packageSelected,
  setPackageSelected,
  packages,
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const selectItem = (item) => {
    setPackageSelected(item);
    toggle(!open);
  };
  DropDownAppointmentTypes.handleClickOutside = () => setOpen(false);
  return (
    <div className={styles.dd_wrapper} style={{zIndex:10}}>
      <div
        tabIndex={0}
        className={styles.dd_header}
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div>
          {packageSelected.price
            ? `${packageSelected.name} - $${packageSelected.price}`
            : packageSelected.name}
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
      {open && (
        <ul className={styles.dd_list}>
          {packages.map((item) => (
            <li key={item.id}>
              <button
                className={styles.dd_list_item}
                type="button"
                onClick={() => selectItem(item)}
              >
                <span>
                  {item.name} - ${item.price}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => DropDownAppointmentTypes.handleClickOutside,
};

export default onClickOutside(DropDownAppointmentTypes, clickOutsideConfig);
