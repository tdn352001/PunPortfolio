import cx from "classnames";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { aboutMeAvatarImg, aboutMeWorkingImg } from "~/assets/img";

const transition = {
  duration: 0.6,
  ease: "easeOut",
};

const AboutMe = () => {
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
    } else if (latest > offsetTop - 100) {
      setAnimVariant("animate");
    }
  });

  return (
    <div
      id="about-me"
      ref={containerRef}
      className="container mx-auto py-[7.5rem] flex flex-row-reverse justify-between items-center"
    >
      <motion.div
        animate={animVariant}
        variants={{
          initial: {
            opacity: 0,
            translateX: 32,
            transition,
          },
          animate: {
            opacity: 1,
            translateX: 0,
            transition,
          },
        }}
        className="w-[32.5rem]"
      >
        <div className={cx("flex gap-3 items-end")}>
          <p className="text-h5 text-primary font-medium font-ichiji tracking-tighter">about me</p>
          <motion.div
            style={{
              originX: 0,
              originY: 0.5,
            }}
            variants={{
              initial: {
                scale: 0,
                transition,
              },
              animate: {
                scale: 1,
                transition: {
                  ...transition,
                  duration: 0.4,
                  delay: 0.3,
                },
              },
            }}
            className="w-[12.125rem] h-1 bg-primary mb-2"
          />
        </div>
        <h1 className="text-h2 text-white font-bold tracking-tighter mt-3">My Resume</h1>
        <p className="text-h5 text-white tracking-tighter mt-6">
          Hi, I&apos;m Nguyen Thi Trang, a UI/UX designer, I am studying and working in the field of
          information technology. Since starting my journey as a designer, my motto has been to be
          user-centric to create great products.
        </p>
      </motion.div>

      <div className="flex gap-10">
        <motion.div
          animate={animVariant}
          variants={{
            initial: {
              opacity: 0,
              translateY: 60,
              transition,
            },
            animate: {
              opacity: 1,
              translateY: 0,
              transition,
            },
          }}
          className="w-[18.875rem]"
        >
          <Image className="w-full h-[25.75rem]" src={aboutMeAvatarImg} alt="Avatar" />
          <p
            className={cx(
              "relative pl-4 mt-6 text-h5 font-bold tracking-tighter",
              "after:w-1 after:h-5 after:bg-primary",
              "after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2"
            )}
          >
            <span>EDUCATION</span>
          </p>
          <div className="pl-4 mt-6">
            <p className="text-h6 text-white font-bold whitespace-nowrap">
              Major: Computer Network & Communication
            </p>
            <p className="text-h6 text-primary font-medium whitespace-nowrap mt-3">
              UNIVERSITY OF INFORMATION TECHNOLOGY - VNUHCM
            </p>
          </div>
        </motion.div>

        <motion.div
          animate={animVariant}
          variants={{
            initial: {
              opacity: 0,
              translateY: -60,
              transition,
            },
            animate: {
              opacity: 1,
              translateY: 0,
              transition,
            },
          }}
          className="w-[18.875rem] pt-[3.75rem]"
        >
          <p
            className={cx(
              "relative pl-4 text-h5 font-bold tracking-tighter",
              "after:w-1 after:h-5 after:bg-primary",
              "after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2"
            )}
          >
            <span>EXPERIENCE</span>
          </p>
          <div className="pl-4 mt-6">
            <p className="text-h6 text-white font-bold whitespace-nowrap">Job: UX / UI Designer</p>
            <p className="text-h6 text-primary font-medium whitespace-nowrap mt-3">
              EBIZWORLD COMPANY
            </p>
          </div>

          <Image
            className="w-full h-[14.5rem] mt-[3.75rem]"
            src={aboutMeWorkingImg}
            alt="EXPERIENCE"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
