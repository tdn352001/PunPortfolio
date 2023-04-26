import cx from "classnames";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import ArrowRightCircle from "~/assets/svg/ArrowRightCircle";

const contactInfo = [
  {
    title: "Email",
    value: "ngthchant@gmail.com",
  },
  {
    title: "Phone",
    value: "0961176755",
  },
  {
    title: "Location",
    value: "Thu Duc, Ho Chi Minh City",
  },
];

const transition = {
  duration: 0.6,
  ease: "easeOut",
};

const Infomations = () => {
  const [animVariant, setAnimVariant] = useState("initial");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: [1, 0.9],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest === 1) {
      setAnimVariant("animate");
    } else if (latest === 0) {
      setAnimVariant("initial");
    }
  });

  return (
    <div
      ref={containerRef}
      className="w-full h-[10.25rem] bg-white/10 flex justify-center items-center"
    >
      <div className="container flex justify-between items-center translate-">
        <motion.div
          animate={animVariant}
          variants={{
            initial: {
              opacity: 0,
              translateX: -24,
              transition,
            },
            animate: {
              opacity: 1,
              translateX: 0,
              transition,
            },
          }}
        >
          <a
            className={cx(
              "flex items-center gap-3 relative",
              "transition-transform ease-linear",
              "hover:translate-x-2"
            )}
            href="/CV-Nguyen Thi Trang.pdf"
            download
          >
            <span className="text-h4 text-white tracking-[0.24em] relative z-10">DOWLOAD CV</span>
            <ArrowRightCircle className="w-[9.5625rem] h-[5.25rem] relative z-10" />
            <div className="absolute top-0 left-12 w-[18.875rem] h-full bg-black" />
          </a>
        </motion.div>

        <div className="flex items-center">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              animate={animVariant}
              variants={{
                initial: {
                  opacity: 0,
                  translateY: 24,
                  transition,
                },
                animate: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    delay: (index + 1) * 0.05,
                    ...transition,
                  },
                },
              }}
              className={cx(
                "flex flex-col items-center gap-3",
                "px-10 border-r border-r-white/20",
                "first:pl-0 last:border-none last:pr-0"
              )}
            >
              <p className="text-h5 tracking-tighter text-white font-medium">{item.title}</p>
              <p className="text-h5 tracking-tighter text-white/60 font-light">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infomations;
