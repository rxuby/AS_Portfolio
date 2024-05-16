import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "@components/HomePage";
import AboutPage from "@components/AboutPage";
import WorkPage from "@components/WorkPage";
import ContactPage from "@components/ContactPage";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "framer-motion";
import BreakPage from "@components/BreakPage";

function App() {
  new LocomotiveScroll();

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        <nav className="flex justify-end pt-4 pr-4 right-0 absolute">
          <ul
            className="nav flex justify-center w-96 py-4 border border-[#92a1d4] rounded-full text-[#92a1d4]"
            style={{ fontFamily: "Rubik" }}
          >
            {/* <li className="ml-5">
              <a href="#" onClick={(e) => { e.preventDefault(); handleScroll("home"); }}>Portfolio</a>
            </li> */}
            <div className="flex gap-11">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("home");
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("about");
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("work");
                  }}
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll("contact");
                  }}
                >
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </div>

      <motion.div
        id="home"
        className=" h-screen flex justify-center items-center "
      >
        <HomePage />
      </motion.div>

      <motion.div id="about" className="h-screen ">
        <AboutPage />
      </motion.div>

      <div className="h-auto">
        <BreakPage />
      </div>

      <motion.div id="work" className="h-auto ">
        <WorkPage />
      </motion.div>

      <motion.div id="contact" className="h-screen flex justify-center items-center">
        <ContactPage />
      </motion.div>
    </>
  );
}

export default App;
