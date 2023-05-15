import React, { useRef, useLayoutEffect, useMemo } from "react";
import classNames from "classnames";
import { gsap } from "gsap";

import styles from "./styles.module.scss";

const GsapPage: React.FC = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<GSAPTimeline>();

  const randomColor = useMemo(() => Math.floor(Math.random() * 16777215).toString(16), []);

  const onClickText = (e: any) => {
    gsap.to(e.target, { scale: 2, yoyo: true, repeat: 1 });
  };
  const toggleTimeline = () => {
    tl.current?.reversed(!tl.current.reversed());
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".text2", { rotate: 360, duration: 2 })
        .from(".text3", { x: -200, duration: 2 })
        .to(".text3", { x: 200, duration: 2 });

      gsap.fromTo(
        ".text4",
        { duration: 2, x: -200, repeat: 1 },
        { duration: 2, x: 200, repeat: 1 }
      );
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={app} className={styles.content}>
        <button
          onClick={onClickText}
          className={classNames(styles.button, "text1")}
          style={{ color: `#${randomColor}` }}
        >
          React1
        </button>
        <p className={classNames(styles.title, "text2")}>React2</p>
        <p className={classNames(styles.title, "text3")}>React3</p>
        <p className={classNames(styles.title, "text4")}>React3</p>
        <button onClick={toggleTimeline} className={classNames(styles.title, "text5")}>
          Click Here
        </button>
      </div>
    </div>
  );
};

export default GsapPage;
