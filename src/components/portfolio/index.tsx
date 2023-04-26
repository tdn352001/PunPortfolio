import cx from "classnames";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import {
  projectOneBgImg,
  projectOneImg,
  projectThreeBgImg,
  projectThreeImg,
  projectTwoBgImg,
  projectTwoImg,
} from "~/assets/img";
import ArrowLeftSVG from "~/assets/svg/ArrowLeft";
import ArrowRightSVG from "~/assets/svg/ArrowRight";
import ProjectItem from "~/components/portfolio/ProjectItem";

const projects = [
  {
    title: "SOCVERSE",
    time: "Sept, 2022  - Nov,2022",
    desc: "The game soccer is built on the mobile platform",
    thumbnail: projectOneImg,
    background: projectOneBgImg,
    contentPos: 157,
  },
  {
    title: "SWEETCAKES",
    time: "4th,Dec - 28th,Dec",
    desc: "Website introduces and provides cakes to users.",
    thumbnail: projectTwoImg,
    background: projectTwoBgImg,
    contentPos: 281,
  },
  {
    title: "E - NFT WORLD",
    time: "Jul, 2022  -Aug,2022",
    desc: "Website makes NFT creation, discovery, and sales easy!",
    thumbnail: projectThreeImg,
    background: projectThreeBgImg,
    contentPos: 405,
  },
];

const transition = {
  duration: 0.6,
  ease: "easeOut",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(1);
  const [animVariant, setAnimVariant] = useState("initial");
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrevProject = () => {
    setSelectedProject(selectedProject === 0 ? projects.length - 1 : selectedProject - 1);
  };

  const handleNextProject = () => {
    setSelectedProject(selectedProject === projects.length - 1 ? 0 : selectedProject + 1);
  };

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["end", "start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const offsetTop = containerRef.current?.offsetTop ?? 0;
    const height = containerRef.current?.offsetHeight ?? 0;
    if (latest < offsetTop - (height / 3) * 2) {
      setAnimVariant("initial");
    } else if (latest > offsetTop - 200) {
      setAnimVariant("animate");
    }
  });

  return (
    <div
      ref={containerRef}
      id="portfolio"
      className="container mx-auto px-[6.8125rem] py-20 flex flex-col"
    >
      {/* Heading */}
      <div className="self-start">
        <motion.div
          animate={animVariant}
          variants={{
            initial: {
              opacity: 0,
              translateY: -32,
              transition,
            },
            animate: {
              opacity: 1,
              translateY: 0,
              transition,
            },
          }}
          className={cx("flex gap-3 items-end")}
        >
          <p className="text-h5 text-primary font-medium font-ichiji tracking-tighter">portfolio</p>

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
                },
              },
            }}
            className="w-[12.125rem] h-1 bg-primary mb-2"
          />
        </motion.div>
        <motion.h1
          animate={animVariant}
          variants={{
            initial: {
              opacity: 0,
              translateY: 32,
              transition,
            },
            animate: {
              opacity: 1,
              translateY: 0,
              transition: transition,
            },
          }}
          className="text-h2 text-white font-bold tracking-tighter mt-3"
        >
          Featured Projects
        </motion.h1>
      </div>

      {/* Control */}
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
              duration: 0.6,
            },
          },
        }}
        className="flex gap-3 self-end mt-5"
      >
        <button
          className={cx(
            "w-10 h-10 rounded-full bg-primary/0 transition-colors relative",
            "hover:bg-primary/20"
          )}
          onClick={handlePrevProject}
        >
          <ArrowLeftSVG
            className={cx(
              "w-[1.125rem] h-3 absolute top-1/2 left-1/2",
              "-translate-x-1/2 -translate-y-1/2"
            )}
          />
        </button>
        <button
          className={cx(
            "w-10 h-10 rounded-full bg-primary/0 transition-colors relative",
            "hover:bg-primary/20"
          )}
          onClick={handleNextProject}
        >
          <ArrowRightSVG
            className={cx(
              "w-[1.125rem] h-3 absolute top-1/2 left-1/2",
              "-translate-x-1/2 -translate-y-1/2"
            )}
          />
        </button>
      </motion.div>

      {/* Project */}
      <motion.div
        className={cx(
          "w-full h-[36.875rem] mt-10 relative",
          "flex flex-col items-start justify-center gap-20"
        )}
      >
        {projects.map((item, index) => (
          <ProjectItem
            key={index}
            index={index}
            selected={selectedProject === index}
            onSelected={setSelectedProject}
            animVariant={animVariant}
            {...item}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
