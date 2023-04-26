import { motion } from "framer-motion";
import BannerSVG from "~/assets/svg/Banner";
import FacebookSVG from "~/assets/svg/Facebook";
import GitSVG from "~/assets/svg/Git";
import InstagramSVG from "~/assets/svg/Instagram";
import { FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL } from "~/configs/contants";

const navLinks = [
  {
    href: INSTAGRAM_URL,
    icon: <InstagramSVG />,
  },
  {
    href: FACEBOOK_URL,
    icon: <FacebookSVG />,
  },
  {
    href: GITHUB_URL,
    icon: <GitSVG />,
  },
];

const animVariant = {
  initial: {
    opacity: 0,
    translateY: 300,
  },
  animate: {
    opacity: 1,
    translateY: 0,
    transition: {
      delay: 0.3,
      duration: 0.4,
      staggerChildren: 0.05,
    },
  },
};

const Banner = () => {
  return (
    // h-[46.75rem]
    <div className="container h-screen  mx-auto pt-[7.25rem] pb-20 flex flex-col gap-10">
      <BannerSVG className="mt-auto self-center w-[52.0625rem] h-[25rem] relative z-30" />
      <div className="w-full flex items-start justify-between">
        <motion.p
          initial={{
            opacity: 0,
            translateY: 300,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: {
              delay: 0.3,
              duration: 0.4,
              staggerChildren: 0.05,
            },
          }}
          className="text-h5 text-white tracking-tighter text-center"
        >
          for me, the function of design is to <br /> make design functional.
        </motion.p>
        <div className="flex items-center gap-10 pt-5">
          <nav className="flex items-center gap-6">
            {navLinks.map((item, index) => (
              <motion.a
                key={index}
                initial={{
                  opacity: 0,
                  translateY: 300,
                }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    delay: 0.3 + index * 0.05,
                    duration: 0.4,
                    staggerChildren: 0.05,
                    bounce: 1,
                  },
                }}
                className="text-[2rem]"
                href={item.href}
              >
                <span className="text-white hover:text-primary transition-btn">{item.icon}</span>
              </motion.a>
            ))}
          </nav>
          <motion.div
            initial={{
              opacity: 0,
              translateY: 300,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: {
                delay: 0.5,
                duration: 0.4,
                bounce: 1,
              },
            }}
            className="w-20 h-0.5 bg-white"
          />
          <motion.p
            initial={{
              opacity: 0,
              translateY: 300,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: {
                delay: 0.55,
                duration: 0.4,
                bounce: 1,
              },
            }}
            className="text-h4 text-white font-light tracking-tighter"
          >
            Follow me
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
