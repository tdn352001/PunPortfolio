import cx from "classnames";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import { contactImg } from "~/assets/img";

const transition = {
  duration: 0.6,
  ease: "easeOut",
};

const Contact = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    message: "",
  });

  const [animVariant, setAnimVariant] = useState("initial");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["end", "start"],
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    const offsetTop = containerRef.current?.offsetTop ?? 0;
    if (latest < offsetTop - 300) {
      setAnimVariant("initial");
    } else if (latest > offsetTop - 200) {
      setAnimVariant("animate");
    }
  });

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(form);
    setForm({
      email: "",
      username: "",
      message: "",
    });

    toast.success("🦄 Form was sended!", {
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      theme: "light",
    });
  };

  const handleFormChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div ref={containerRef} id="contact" className="w-full bg-secondary">
      <div className="container mx-auto px-[6.8125rem] flex gap-6">
        <motion.div
          animate={animVariant}
          variants={{
            initial: {
              opacity: 0,
              translateX: -40,
              transition,
            },
            animate: {
              opacity: 1,
              translateX: 0,
              transition,
            },
          }}
        >
          <Image className="w-[25.625rem]" src={contactImg} alt="contact" />
        </motion.div>

        <div className="mt-20">
          <div>
            <motion.div
              animate={animVariant}
              variants={{
                initial: {
                  opacity: 0,
                  translateX: 40,
                  transition,
                },
                animate: {
                  opacity: 1,
                  translateX: 0,
                  transition,
                },
              }}
              className={cx("flex gap-3 items-end")}
            >
              <p className="text-h5 text-primary font-medium font-ichiji tracking-tighter">
                get in touch
              </p>
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
            </motion.div>
            <motion.p
              animate={animVariant}
              variants={{
                initial: {
                  opacity: 0,
                  translateX: 40,
                  transition,
                },
                animate: {
                  opacity: 1,
                  translateX: 0,
                  transition: {
                    ...transition,
                    delay: 0.1,
                  },
                },
              }}
              className="text-h6 text-white font-medium mt-3"
            >
              Let&apos;s build the next big thing together!
            </motion.p>
            <motion.p
              animate={animVariant}
              variants={{
                initial: {
                  opacity: 0,
                  translateX: 40,
                  transition,
                },
                animate: {
                  opacity: 1,
                  translateX: 0,
                  transition: {
                    ...transition,
                    delay: 0.2,
                  },
                },
              }}
              className="text-s1 text-white/60 mt-6"
            >
              Phone: 0961176755
            </motion.p>
            <motion.p
              animate={animVariant}
              variants={{
                initial: {
                  opacity: 0,
                  translateX: 40,
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
              className="text-s1 text-white/60 mt-3"
            >
              Email: ngthchant@gmail.com
            </motion.p>
          </div>

          <form
            className="w-[39.25rem] mt-10 flex flex-col items-center gap-10"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col items-center gap-6 w-full">
              <motion.input
                animate={animVariant}
                variants={{
                  initial: {
                    opacity: 0,
                    translateX: 40,
                    transition,
                  },
                  animate: {
                    opacity: 1,
                    translateX: 0,
                    transition: {
                      ...transition,
                      delay: 0.4,
                    },
                  },
                }}
                className={cx(
                  "w-full p-[0.6875rem] bg-transparent",
                  "border border-current rounded",
                  " text-h6 text-white/80",
                  "transition-colors ease-in",
                  "focus:text-white focus:outline-none",
                  "placeholder-shown:text-white/20"
                )}
                autoComplete="off"
                name="username"
                required
                value={form.username}
                onChange={handleFormChange}
                placeholder="Username"
              />
              <motion.input
                animate={animVariant}
                variants={{
                  initial: {
                    opacity: 0,
                    translateX: 40,
                    transition,
                  },
                  animate: {
                    opacity: 1,
                    translateX: 0,
                    transition: {
                      ...transition,
                      delay: 0.5,
                    },
                  },
                }}
                className={cx(
                  "w-full p-[0.6875rem] bg-transparent",
                  "border border-current rounded",
                  " text-h6 text-white/80",
                  "transition-colors ease-in",
                  "focus:text-white focus:outline-none",
                  "placeholder-shown:text-white/20"
                )}
                placeholder="Email"
                autoComplete="off"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleFormChange}
              />

              <motion.textarea
                animate={animVariant}
                variants={{
                  initial: {
                    opacity: 0,
                    translateX: 40,
                    transition,
                  },
                  animate: {
                    opacity: 1,
                    translateX: 0,
                    transition: {
                      ...transition,
                      delay: 0.6,
                    },
                  },
                }}
                rows={4}
                cols={6}
                className={cx(
                  "w-full h-[8.75rem] p-[0.6875rem] bg-transparent",
                  "border border-current rounded",
                  "resize-none",
                  " text-h6 text-white/80",
                  "transition-colors ease-in",
                  "focus:text-white focus:outline-none",
                  "placeholder-shown:text-white/20"
                )}
                placeholder="Message"
                name="message"
                required
                value={form.message}
                onChange={handleFormChange}
              />
            </div>

            <motion.button
              animate={animVariant}
              variants={{
                initial: {
                  opacity: 0,
                  translateY: 40,
                  transition,
                },
                animate: {
                  opacity: 1,
                  translateY: 0,
                  transition: {
                    ...transition,
                    delay: 0.7,
                  },
                },
              }}
              className="group w-[12.125rem] h-[3.5rem] pb-1 pr-1 relative"
            >
              <span
                className={cx(
                  "block w-full bg-primary transition-colors ease-linear",
                  "relative z-10 rounded-sm",
                  "text-[1.25rem] leading-[3.25rem] text-center font-bold",
                  "group-hover:bg-[#E1234D]"
                )}
              >
                SEND MESSAGE
              </span>
              <div
                className={cx(
                  "block w-[11.875rem] h-[3.25rem] bg-white",
                  "absolute right-0 bottom-0 rounded-sm",
                  "transition-transform ease-linear",
                  "group-hover:-translate-x-1 group-hover:-translate-y-1"
                )}
              />
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
