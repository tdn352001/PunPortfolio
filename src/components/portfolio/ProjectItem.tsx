import cx from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import CalendarSVG from "~/assets/svg/Calendar";

interface ProjectItemProps {
  title: string;
  time: string;
  desc: string;
  thumbnail: any;
  background: any;
  index: number;
  selected?: boolean;
  contentPos: number;
  onSelected: (index: number) => void;
  animVariant: string;
}

const transition = {
  duration: 0.6,
  ease: "easeOut",
};

const ProjectItem = ({
  title,
  time,
  desc,
  thumbnail,
  background,
  index,
  selected,
  contentPos,
  onSelected,
  animVariant,
}: ProjectItemProps) => {
  return (
    <motion.div key={index}>
      <motion.div
        animate={animVariant}
        variants={{
          initial: {
            opacity: 0,
            rotateY: 20,
            translateX: -32,
            transition,
          },
          animate: {
            opacity: 1,
            translateX: 0,
            rotateY: 0,
            transition: {
              ...transition,
              delay: 0.3,
            },
          },
        }}
        className="flex gap-5 items-center relative z-30 origin-[left_center]"
      >
        <button
          className={cx("text-h4 font-bold tracking-tighter", "transition-colors ease-linear", {
            "text-white cursor-default": selected,
            "cursor-pointer text-white/60 hover:text-white": !selected,
          })}
          onClick={onSelected.bind(this, index)}
        >
          0{index + 1}
        </button>
        <motion.div
          animate={selected ? "to" : "from"}
          variants={{
            from: {
              opacity: 0,
              translateX: "-1.25rem",
            },
            to: {
              opacity: 1,
              translateX: "0rem",
            },
          }}
          transition={{
            duration: 0.3,
            bounce: 0,
            ease: "easeOut",
          }}
          className={cx("w-[12.0625rem] pl-1 pr-1.5 relative")}
        >
          <div
            className={cx(
              "w-2 h-2 rounded-full bg-white shadow-circle",
              "absolute left-0 top-1/2 -translate-y-1/2"
            )}
          />
          <div className="w-full h-1 rounded-sm bg-white" />
          <div
            className={cx(
              "w-3 h-3 rounded-full bg-white",
              "absolute right-0 top-1/2 -translate-y-1/2"
            )}
          >
            <div
              className={cx(
                "w-1.5 h-1.5 rounded-full bg-white shadow-circle",
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              )}
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="initial"
        animate={selected ? "to" : "from"}
        variants={{
          initial: {
            opacity: 0,
            translateX: "1.25rem",
          },
          from: {
            opacity: 0,
            transition: {
              duration: 0.3,
              bounce: 0,
              ease: "easeOut",
            },
            transitionEnd: {
              translateX: "1.25rem",
            },
          },
          to: {
            opacity: 1,
            translateX: "0rem",
            transition: {
              opacity: {
                duration: 0.3,
                bounce: 0,
                ease: "easeOut",
              },
              translateX: {
                duration: 0.4,
                ease: "easeOut",
              },
              delay: 0.3,
            },
          },
        }}
        className="absolute top-0 right-0"
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
              transition: {
                ...transition,
                delay: 0.3,
              },
            },
          }}
          className="origin-[right_center]"
        >
          <div
            className="absolute left-[3.375rem] flex flex-col gap-3"
            style={{
              top: `${contentPos / 16}rem`,
            }}
          >
            <h2 className="text-h6 text-white font-bold">{title}</h2>
            <div className="flex items-center gap-2">
              <CalendarSVG className="w-4 h-4" />
              <p className="text-[0.75rem] leading-5 text-white/60 font-light">{time}</p>
            </div>
            <p className="text-s1 text-white max-w-[16rem]">{desc}</p>
          </div>
          <Image
            className="w-[52.8125rem] h-[36.875rem]"
            src={background}
            alt="Project Background"
          />
          <Image
            className="w-[36rem] h-[34.375rem] absolute top-10 right-0"
            src={thumbnail}
            alt="Project Thumbnail"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectItem;
