import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const TestPage = () => {
  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".square1", { rotate: 360, duration: 5 });
      //gsap.to(".square2", { rotate: 360, duration: 5 });
      //gsap.to(".square3", { rotate: 360, duration: 5 });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={app}
      className='flex flex-col items-center justify-center w-screen h-screen space-y-5'
    >
      <div className='square1'>Hello World</div>
      <div className='square2'>Hello World</div>
      <div className='square3'>Hello World</div>
    </div>
  );
};
export default TestPage;
