import React from "react";
import { Control, FieldValues, useWatch } from "react-hook-form";

import styles from "./styles.module.scss";

type Props = {
  control: Control<FieldValues, any>;
};

const Preview: React.FC<Props> = ({ control }) => {
  const firstName = useWatch({ control, name: "firstName" });
  const lastName = useWatch({ control, name: "lastName" });
  return (
    <div className={styles.wrapper}>
      <p>Preview</p>
      <div>
        <p>
          First Name: <span>{firstName}</span>
        </p>
        <p>
          Last Name: <span>{lastName}</span>
        </p>
      </div>
    </div>
  );
};

export default Preview;
