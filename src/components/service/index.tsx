import cx from "classnames";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  aiImg,
  bootstrapImg,
  cssImg,
  figmaImg,
  htmlImg,
  invisionImg,
  ptsImg,
  wordpressImg,
} from "~/assets/img";
import CodeSVG from "~/assets/svg/Code";
import PhoneDesktopSVG from "~/assets/svg/PhoneDesktop";
import ServiceBackgroundBottomSVG from "~/assets/svg/ServiceBackgroundBottom";
import ServiceBackgroundTopSVG from "~/assets/svg/ServiceBackgroundTop";
import Liquid from "~/components/service/Liquid";

const services = [
  {
    icon: <PhoneDesktopSVG />,
    background: <ServiceBackgroundTopSVG className="absolute inset-0" />,
    title: "UX/UI Design",
    content: ["Website Design", "Mobile App Design", "Mobile App Design"],
  },
  {
    icon: <CodeSVG />,
    title: "UI Development",
    content: ["Wordpress CMS Platform", "Some Language, framework, Library"],
    background: <ServiceBackgroundBottomSVG className="absolute inset-0" />,
  },
];

const skills = [
  {
    icon: aiImg,
    size: 60,
    container: 80,
    top: 324,
    left: 30,
    backgroundColor: "rgb(0 0 0)",
  },
  {
    icon: invisionImg,
    size: 70,
    container: 100,
    top: 424,
    left: 184,
    backgroundColor: "rgb(0 0 0 / 0.2)",
  },
  {
    icon: ptsImg,
    size: 56,
    container: 68,
    top: 583,
    left: 76,
    backgroundColor: "rgb(0 0 0 / 0.2)",
  },
  {
    icon: figmaImg,
    size: 90,
    container: 126,
    top: 656,
    left: 188,
    backgroundColor: "rgb(0 0 0)",
  },
  {
    icon: cssImg,
    size: 46,
    container: 46,
    top: 353,
    right: 151,
    backgroundColor: "rgb(0 0 0 / 0.2)",
  },
  {
    icon: htmlImg,
    size: 80,
    container: 120,
    top: 452,
    right: 193,
    backgroundColor: "rgb(0 0 0 / 0.2)",
  },
  {
    icon: wordpressImg,
    size: 62,
    container: 85,
    top: 572,
    right: 21,
    backgroundColor: "rgb(0 0 0 / 0.2)",
  },
  {
    icon: bootstrapImg,
    size: 85,
    container: 85,
    top: 692,
    right: 164,
    backgroundColor: "rgb(0 0 0)",
  },
];

const transition = {
  duration: 0.5,
  ease: "easeOut",
};

const Service = () => {
  const [animVariant, setAnimVariant] = useState("initial");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["end", "start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const offsetTop = containerRef.current?.offsetTop ?? 0;
    const height = containerRef.current?.offsetHeight ?? 0;
    if (latest < offsetTop - (height / 3) * 2) {
      setAnimVariant("initial");
    } else if (latest > offsetTop - 300) {
      setAnimVariant("animate");
    }
  });

  return (
    <div ref={containerRef} id="services" className="w-full bg-secondary">
      <div className="container mx-auto relative py-20 ">
        <div className="w-full flex flex-col items-center">
          <motion.div
            animate={animVariant}
            variants={{
              initial: {
                opacity: 0,
                translateY: -32,
                transition: {
                  ...transition,
                  duration: 0.2,
                },
              },
              animate: {
                opacity: 1,
                translateY: 0,
                transition: {
                  ...transition,
                  when: "afterChildren",
                },
              },
            }}
            className="w-[37.0625rem] flex items-end gap-3"
          >
            <motion.div
              animate={animVariant}
              style={{
                originX: 1,
                originY: 0.5,
              }}
              variants={{
                initial: {
                  scaleX: 0,
                  transition,
                },
                animate: {
                  scaleX: 1,
                  transition: {
                    ...transition,
                    duration: 0.4,
                    delay: 0.3,
                  },
                },
              }}
              className="flex-1 h-1 bg-primary mb-2"
            />
            <p className="text-h5 text-primary font-medium font-ichiji tracking-tighter">service</p>
            <motion.div
              animate={animVariant}
              style={{
                originX: 0,
                originY: 0.5,
              }}
              variants={{
                initial: {
                  scaleX: 0,
                  transition,
                },
                animate: {
                  scaleX: 1,
                  transition: {
                    ...transition,
                    duration: 0.4,
                    delay: 0.3,
                  },
                },
              }}
              className="flex-1 h-1 bg-primary mb-2"
            />
          </motion.div>

          <motion.h1
            animate={animVariant}
            variants={{
              initial: {
                opacity: 0,
                translateY: 32,
                transition: {
                  ...transition,
                  duration: 0.2,
                },
              },
              animate: {
                opacity: 1,
                translateY: 0,
                transition: {
                  ...transition,
                  delay: 0.05,
                },
              },
            }}
            className="text-h2 text-white font-bold tracking-tighter mt-3"
          >
            What I can do for you
          </motion.h1>

          <motion.p
            animate={animVariant}
            variants={{
              initial: {
                opacity: 0,
                translateY: 32,
                transition: {
                  ...transition,
                  duration: 0.2,
                },
              },
              animate: {
                opacity: 1,
                translateY: 0,
                transition: {
                  ...transition,
                  delay: 0.1,
                },
              },
            }}
            className="text-h6 font-medium text-white mt-6"
          >
            Design anything from simple icons to fully featured websites and applications.
          </motion.p>

          <div className="h-[34.75rem] mt-10 px-8 py-2 flex gap-6 relative z-50">
            {services.map((item, index) => (
              <motion.div
                key={index}
                animate={animVariant}
                variants={{
                  initial: {
                    opacity: 0,
                    translateX: index === 0 ? -32 : 32,
                    transition,
                  },
                  animate: {
                    opacity: 1,
                    translateX: 0,
                    transition: {
                      ...transition,
                      delay: 0.15,
                    },
                  },
                }}
                className={cx("w-[16.25rem] h-[22rem] px-2.5 py-5", "relative rounded-lg", {
                  "self-start": index === 0,
                  "self-end": index === 1,
                })}
              >
                <div className={cx("relative z-10 w-[5.3125rem] h-[5.3125rem] ")}>
                  <div className="w-full h-full relative z-10">{item.icon}</div>
                  <div className="w-16 h-16 rounded-full bg-[#0E0E0E] absolute bottom-0 right-0 opacity-20" />
                </div>

                <h2
                  className={cx(
                    "text-h4 text-white font-bold tracking-tighter whitespace-nowrap",
                    "relative z-10 mt-5",
                    "after:absolute after:left-0 after:top-full",
                    "after:mt-2.5 after:-translate-y-1/2",
                    "after:w-[5.3125rem] after:h-0.5 after:bg-primary"
                  )}
                >
                  {item.title}
                </h2>

                <ul className="relative z-10 mt-[1.875rem] space-y-3">
                  {item.content.map((content, index) => (
                    <li
                      key={`${content}${index}`}
                      className={cx(
                        "flex items-center gap-2",
                        "before:w-[0.3125rem] before:h-[0.3125rem] before:rounded-full before:bg-primary"
                      )}
                    >
                      <span className="block h-[1.75rem] text-s1 text-white">{content}</span>
                    </li>
                  ))}
                </ul>
                {item.background}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          {skills.map((item, index) => (
            <motion.div
              key={index}
              style={{
                width: `${item.container / 16}rem`,
                height: `${item.container / 16}rem`,
                top: `${item.top / 16}rem`,
                left: item.left ? `${item.left / 16}rem` : undefined,
                right: item.right ? `${item.right / 16}rem` : undefined,
                backgroundColor: item.backgroundColor,
              }}
              animate={animVariant}
              variants={{
                initial: {
                  opacity: 0,
                  translateY: 300,
                  transition: {
                    ...transition,
                    duration: 0.2,
                  },
                },
                animate: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    ...transition,
                    delay: 0.2 + index * 0.05,
                  },
                },
              }}
              className="absolute z-10 rounded-full bg-black/20"
            >
              <Image
                style={{
                  width: `${item.size / 16}rem`,
                  height: `${item.size / 16}rem`,
                }}
                className="object-fill absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                alt="skill"
                src={item.icon}
              />
            </motion.div>
          ))}
        </div>

        <Liquid animState={animVariant} />
      </div>
    </div>
  );
};

export default Service;
