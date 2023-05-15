import React from "react";
import { useForm } from "react-hook-form";

import styles from "./styles.module.scss";
import Preview from "./Preview";

const ReactHookForm: React.FC = () => {
  const { register, control } = useForm();

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <label htmlFor='firstName'>First Name</label>
        <input className={styles.input} {...register("firstName")} />
        <label htmlFor='firstName'>Last Name</label>
        <input className={styles.input} {...register("lastName")} />
      </div>

      <Preview control={control} />
      <div></div>
    </div>
  );
};

export default ReactHookForm;
