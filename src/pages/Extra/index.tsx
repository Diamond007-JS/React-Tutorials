import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

const ExtraPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonWrapper} onClick={() => navigate("/home")}>
        <button>to Home</button>
      </div>
      <div className={styles.content}>
        <p>ExtraPage</p>
      </div>
    </div>
  );
};

export default ExtraPage;
