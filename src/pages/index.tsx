import cx from "classnames";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutMe from "~/components/AboutMe";
import Banner from "~/components/Banner";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Infomations from "~/components/Infomations";
import Projects from "~/components/portfolio";
import Service from "~/components/service";
import { ichiji, oxanium } from "~/configs/fonts";

export default function Home() {
  return (
    <div
      className={cx(
        "bg-black w-full h-full relative overflow-x-hidden",
        oxanium.className,
        ichiji.variable
      )}
    >
      <Head>
        <title>Nguyen Thi Trang | Professional UX/UI Designer Portfolio</title>
      </Head>

      <Header />
      <Banner />
      <Infomations />
      <AboutMe />
      <Service />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  );
}
