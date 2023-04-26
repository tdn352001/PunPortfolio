import cx from "classnames";
import { motion } from "framer-motion";
import CategorySVG from "~/assets/svg/Category";
import HomeSVG from "~/assets/svg/Home";
import LogoSVG from "~/assets/svg/Logo";
import MailSVG from "~/assets/svg/Mail";
import PersonSVG from "~/assets/svg/Person";
import SettingsSVG from "~/assets/svg/Settings";

const navLinks = [
  {
    title: "Home",
    component: <HomeSVG />,
    href: "#",
  },
  {
    title: "About me",
    component: <PersonSVG />,
    href: "#about-me",
  },
  {
    title: "Services",
    component: <SettingsSVG />,
    href: "#services",
  },
  {
    title: "Portfolio",
    component: <CategorySVG />,
    href: "#portfolio",
  },
  {
    title: "Contact me",
    component: <MailSVG />,
    href: "#contact",
  },
];

const Header = () => {
  return (
    <header
      className={cx(
        "container pt-5 absolute top-0 left-1/2 z-10 -translate-x-1/2 bg-black",
        "flex justify-between items-start overflow-hidden"
      )}
    >
      <motion.div
        initial={{
          opacity: 0,
          translateX: "-250px",
        }}
        animate={{
          opacity: 1,
          translateX: "0px",
          transition: {
            duration: 0.5,
          },
        }}
      >
        <LogoSVG className="w-14 h-14" />
      </motion.div>
      <nav className="flex flex-col items-end gap-3">
        {navLinks.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            className={cx("group flex items-center gap-2")}
            initial={"initial"}
            animate={"animate"}
            variants={{
              initial: {
                opacity: 0,
                translateX: "250px",
              },
              animate: {
                opacity: 1,
                translateX: "0px",
                transition: {
                  duration: 0.5,
                  delay: index * 0.05,
                },
              },
            }}
          >
            <motion.span
              className={cx(
                "text-s1 text-white origin-[center_right]",
                "transition-all ease-in-out duration-500",
                "group-hover:opacity-100 group-hover:scale-100",
                {
                  "opacity-100 scale-100": index === 0,
                  "opacity-0 scale-0": index !== 0,
                }
              )}
            >
              {item.title}
            </motion.span>
            <div
              className={cx(
                "h-[1px] bg-[#D9D9D9]",
                "transition-[width] ease-in-out duration-500",
                "group-hover:w-5",
                {
                  "w-5": index === 0,
                  "w-0": index !== 0,
                }
              )}
            />
            <div
              className={cx(
                "transition-btn opacity-60",
                "group-hover:text-primary group-hover:opacity-100",
                {
                  "opacity-100 text-primary": index === 0,
                  "text-white/60": index !== 0,
                }
              )}
            >
              {item.component}
            </div>
          </motion.a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
