import React, { useRef, useEffect, useMemo } from "react";
import classNames from "classnames";
import { gsap } from "gsap";

import styles from "./styles.module.scss";

const Home: React.FC = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  const randomColor = useMemo(() => Math.floor(Math.random() * 16777215).toString(16), []);

  const onClickText = (e: any) => {
    gsap.to(e.target, { scale: 2, yoyo: true, repeat: 1 });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".text2", { rotate: 360, duration: 2 })
        .to(".text3", { x: 200 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={app} className={styles.wrapper}>
      <div className={styles.content}>
        <button
          onClick={onClickText}
          className={classNames(styles.title, "text1")}
          style={{ color: `#${randomColor}` }}
        >
          React1
        </button>
        <p className={classNames(styles.title, "text2")}>React2</p>
        <p className={classNames(styles.title, "text3")}>React3</p>
      </div>
    </div>
  );
};

export default Home;
