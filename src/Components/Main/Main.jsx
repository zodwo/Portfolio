import React, { useEffect } from "react";
import Home from "./Introduce/Introduce";
import Menu from "../MenuBar/Menu";
import Profile from "../Profile/Profile";
import BgVideo from "../../Assets/Video/bg2.mp4";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { PiBagFill } from "react-icons/pi";
import { MdOutlineSwapHorizontalCircle, MdOutlineWebStories } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import About from "./About/About";
import Resume from "./Resume/Resume";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
////
import Aos from "aos";
import "aos/dist/aos.css";

const Main = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 700,
        });
    }, []);

    return (
        <>
            <video
                className="w-full h-full object-fill opacity-30 fixed top-0 left-0 right-0 bottom-0 -z-10"
                autoPlay={true}
                loop={true}
                muted={true}
            >
                <source src={BgVideo} />
            </video>

            <div className="container max-w-[1130px] mx-auto px-3">
                <section className="container pb-16 ms-auto max-w-[770px] max-[1220px]:mx-auto max-[1220px]:py-5">
                    <Profile />
                    <Menu
                        TfiEmail={TfiEmail}
                        MdOutlineWebStories={MdOutlineWebStories}
                        MdOutlineSwapHorizontalCircle={MdOutlineSwapHorizontalCircle}
                        PiBagFill={PiBagFill}
                        AiOutlineHome={AiOutlineHome}
                        AiOutlineUser={AiOutlineUser}
                    />

                    <section id="Home" className="custom-section">
                        <Home AiOutlineHome={AiOutlineHome} />
                    </section>

                    <section className="mt-40 custom-section" id="About">
                        <About AiOutlineUser={AiOutlineUser} />
                    </section>

                    <section className="mt-40 custom-section" id="Resume">
                        <Resume PiBagFill={PiBagFill} />
                    </section>

                    <section className="mt-40 custom-section" id="Skills">
                        <Skills MdOutlineSwapHorizontalCircle={MdOutlineSwapHorizontalCircle} />
                    </section>

                    <section className="mt-40 custom-section" id="Portfolio">
                        <Portfolio MdOutlineWebStories={MdOutlineWebStories} />
                    </section>

                    <section className="mt-40 custom-section" id="Contact">
                        <Contact TfiEmail={TfiEmail} />
                    </section>
                </section>
            </div>
        </>
    );
};

export default Main;
