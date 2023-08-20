import React from "react";
import Home from "./Introduce/Introduce";
import Menu from "../MenuBar/Menu";
import Profile from "../Profile/Profile";
import BgVideo from "../../Assets/Video/bg2.mp4";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { PiBagFill } from "react-icons/pi";
import { GiServerRack } from "react-icons/gi";
import { MdOutlineSwapHorizontalCircle, MdOutlineWebStories } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import About from "./About/About";

const Main = () => {
    return (
        <>
            <video className="w-full h-full object-fill opacity-30 fixed top-0 left-0 right-0 bottom-0 -z-10" autoPlay loop muted>
                <source src={BgVideo} />
            </video>

            <div className="container max-w-[1130px] mx-auto px-3">
                <section className="container py-16 ms-auto max-w-[770px] max-[1220px]:mx-auto max-[1220px]:py-5">
                    <Profile />

                    <Menu
                        TfiEmail={TfiEmail}
                        MdOutlineWebStories={MdOutlineWebStories}
                        MdOutlineSwapHorizontalCircle={MdOutlineSwapHorizontalCircle}
                        GiServerRack={GiServerRack}
                        PiBagFill={PiBagFill}
                        AiOutlineHome={AiOutlineHome}
                        AiOutlineUser={AiOutlineUser}
                    />

                    <section>
                        <Home AiOutlineHome={AiOutlineHome} />
                    </section>

                    <section className="mt-40">
                        <About AiOutlineUser={AiOutlineUser} />
                    </section>
                </section>
            </div>
        </>
    );
};

export default Main;
