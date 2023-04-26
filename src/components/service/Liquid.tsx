import cx from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface LiquidProps {
  animState: string;
}
const Liquid = ({ animState }: LiquidProps) => {
  const [animate, setAnimate] = useState(2);

  const handleAnimComplete = () => {
    let newAnimate = animate + 1;
    if (newAnimate >= 6) {
      newAnimate = 1;
    }
    setAnimate(newAnimate);
  };

  useEffect(() => {
    setAnimate(2);
  }, []);

  return (
    <motion.div
      animate={animState}
      variants={{
        initial: {
          opacity: 0,
          transition: {
            duration: 0.2,
          },
        },
        animate: {
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 0.3,
          },
        },
      }}
      className={cx(
        "absolute bottom-[5.3125rem] left-1/2",
        "w-[39.25rem] h-[34.75rem] -translate-x-1/2 bg-secondary mix-blend-exclusion"
      )}
    >
      <motion.div
        initial={"state1"}
        animate={`state${animate}`}
        variants={{}}
        transition={{
          duration: 3,
          ease: "linear",
        }}
        onAnimationComplete={handleAnimComplete}
        className="blur-md absolute inset-0 z-0"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            variants={variants[`shape${index}`]}
            transition={{
              duration: 3,
              ease: "linear",
            }}
            className="absolute bg-liquid rounded-full"
          />
        ))}
      </motion.div>
      <div className="absolute inset-0 z-10 bg-[#ACACAC] mix-blend-color-dodge" />
      <div className="absolute inset-0 z-20 bg-[#CCCCCC] mix-blend-color-burn" />
      <div className="absolute inset-0 z-30 bg-liquid mix-blend-darken" />
    </motion.div>
  );
};

const variants: any = {
  shape0: {
    state1: {
      width: "calc(249 / 16 * 1rem)",
      height: "calc(249 / 16 * 1rem)",
      top: "calc(96 / 16 * 1rem)",
      left: "calc(102 /16 * 1rem)",
    },
    state2: {
      width: "calc(249 / 16 * 1rem)",
      height: "calc(249 / 16 * 1rem)",
      top: "calc(68 / 16 * 1rem)",
      left: "calc(125 /16 * 1rem)",
    },
    state3: {
      width: "calc(249 / 16 * 1rem)",
      height: "calc(249 / 16 * 1rem)",
      top: "calc(240 / 16 * 1rem)",
      left: "calc(231 /16 * 1rem)",
    },
    state4: {
      width: "calc(249 / 16 * 1rem)",
      height: "calc(249 / 16 * 1rem)",
      top: "calc(228 / 16 * 1rem)",
      left: "calc(282 /16 * 1rem)",
    },
  },
  shape1: {
    state1: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(119 / 16 * 1rem)",
      left: "calc(266 /16 * 1rem)",
    },
    state2: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(223 / 16 * 1rem)",
      left: "calc(233 /16 * 1rem)",
    },
    state3: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(119 / 16 * 1rem)",
      left: "calc(317 /16 * 1rem)",
    },
    state4: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(103 / 16 * 1rem)",
      left: "calc(314 /16 * 1rem)",
    },
  },
  shape2: {
    state1: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(293 / 16 * 1rem)",
      left: "calc(162 /16 * 1rem)",
    },
    state2: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(254 / 16 * 1rem)",
      left: "calc(139 /16 * 1rem)",
    },
    state3: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(181 / 16 * 1rem)",
      left: "calc(355 /16 * 1rem)",
    },
    state4: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(174 / 16 * 1rem)",
      left: "calc(359 /16 * 1rem)",
    },
  },
  shape3: {
    state1: {
      width: "calc(232 / 16 * 1rem)",
      height: "calc(232 / 16 * 1rem)",
      top: "calc(229 / 16 * 1rem)",
      left: "calc(260 /16 * 1rem)",
    },
    state2: {
      width: "calc(201 / 16 * 1rem)",
      height: "calc(201 / 16 * 1rem)",
      top: "calc(288 / 16 * 1rem)",
      left: "calc(231 /16 * 1rem)",
    },
    state3: {
      width: "calc(201 / 16 * 1rem)",
      height: "calc(201 / 16 * 1rem)",
      top: "calc(68 / 16 * 1rem)",
      left: "calc(173 /16 * 1rem)",
    },
    state4: {
      width: "calc(261 / 16 * 1rem)",
      height: "calc(261 / 16 * 1rem)",
      top: "calc(80 / 16 * 1rem)",
      left: "calc(96 /16 * 1rem)",
    },
  },
  shape4: {
    state1: {
      width: "calc(155 / 16 * 1rem)",
      height: "calc(155 / 16 * 1rem)",
      top: "calc(120 / 16 * 1rem)",
      left: "calc(318 /16 * 1rem)",
    },
    state2: {
      width: "calc(155 / 16 * 1rem)",
      height: "calc(155 / 16 * 1rem)",
      top: "calc(176 / 16 * 1rem)",
      left: "calc(304 /16 * 1rem)",
    },
    state3: {
      width: "calc(155 / 16 * 1rem)",
      height: "calc(155 / 16 * 1rem)",
      top: "calc(226 / 16 * 1rem)",
      left: "calc(146 /16 * 1rem)",
    },
    state4: {
      width: "calc(200 / 16 * 1rem)",
      height: "calc(200 / 16 * 1rem)",
      top: "calc(227 / 16 * 1rem)",
      left: "calc(162 /16 * 1rem)",
    },
  },
  shape5: {
    state1: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(221 / 16 * 1rem)",
      left: "calc(382 /16 * 1rem)",
    },
    state2: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(259 / 16 * 1rem)",
      left: "calc(360 /16 * 1rem)",
    },
    state3: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(126 / 16 * 1rem)",
      left: "calc(131 /16 * 1rem)",
    },
    state4: {
      width: "calc(143 / 16 * 1rem)",
      height: "calc(143 / 16 * 1rem)",
      top: "calc(171 / 16 * 1rem)",
      left: "calc(187 /16 * 1rem)",
    },
  },
};

export default Liquid;
