import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

const linkList = [
  { link: "gsap", label: "Gsap" },
  { link: "form", label: "Hook-Form" },
  { link: "extra", label: "Extra" },
];

const Navbar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {linkList.map((item) => (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "text-indigo-500" : isActive ? "text-indigo-700" : ""
          }
          key={item.link}
          to={item.link}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
