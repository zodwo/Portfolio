import React, { useEffect, useState } from "react";
import MenuIcons from "./MenuIcons";
import { VscMenu } from "react-icons/vsc";
import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const Menu = ({
    TfiEmail,
    MdOutlineWebStories,
    MdOutlineSwapHorizontalCircle,
    AiOutlineHome,
    AiOutlineUser,
    PiBagFill,
}) => {
    const [active, setActive] = useState(false);

    const sizeHandler = () => {
        window.innerWidth > 1220 && setActive(false);
    };

    function deactive() {
        setActive(false);
        removeEventListener("click", deactive);
    }

    if (active) {
        setTimeout(() => {
            window.addEventListener("click", deactive);
        }, 200);
    }

    useEffect(() => {
        window.addEventListener("resize", sizeHandler);
        window.addEventListener("DOMContentLoaded", sizeHandler);

        return () => {
            window.removeEventListener("resize", sizeHandler);
            window.removeEventListener("DOMContentLoaded", sizeHandler);
        };
    }, [active]);

    const iconList = [
        {
            liActive: true,
            IconName: <AiOutlineHome size={18} />,
            actives: active,
            setActives: setActive,
            text: "Home",
        },
        {
            liActive: false,
            IconName: <AiOutlineUser size={18} />,
            actives: active,
            setActives: setActive,
            text: "About",
        },
        {
            liActive: false,
            IconName: <PiBagFill size={18} />,
            actives: active,
            setActives: setActive,
            text: "Resume",
        },
        {
            liActive: false,
            IconName: <MdOutlineSwapHorizontalCircle size={18} />,
            actives: active,
            setActives: setActive,
            text: "Skills",
        },
        {
            liActive: false,
            IconName: <MdOutlineWebStories size={18} />,
            actives: active,
            setActives: setActive,
            text: "Portfolio",
        },
        {
            liActive: false,
            IconName: <TfiEmail size={18} />,
            actives: active,
            setActives: setActive,
            text: "Contact",
        },
    ];

    return (
        <>
            {!window.innerWidth < 769 && (
                <div
                    className="fixed min-[1220px]:hidden max-[800px]:top-[19px] max-[800px]:right-3 top-8 right-16 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary cursor-pointer transition-all duration-200 bg-black bg-opacity-80"
                    onClick={() => setActive(true)}
                >
                    <VscMenu size={20} />
                </div>
            )}

            <div
                className={`fixed top-[50%] translate-y-[-50%] right-16  w-14 h-[350px] z-10 
                max-[1220px]:top-0 max-[1220px]:translate-y-0 max-[1220px]:h-full 
                max-[1220px]:w-[345px] max-[1220px]:bg-[#191919] 
                ${active ? "max-[1220px]:right-0" : "max-[1220px]:-right-96"} 
                transition-all delay-100 flex flex-col menus`}
            >
                <div className={`max-[1220px]:w-[160px] mx-auto ${active && "pt-12"} w-full`}>
                    {active && (
                        <>
                            <div
                                className="fixed top-5 right-6"
                                onClick={() => {
                                    setActive(false);
                                }}
                            >
                                <MdClose size={32} />
                            </div>
                            <div className="text-xl text-secondary">Menu</div>
                        </>
                    )}
                    <ul
                        className={`flex flex-col gap-6  border
                        border-border rounded-full text-secondary bg-black bg-opacity-70 py-6 
                        w-full  max-[1220px]:rounded-none  max-[1220px]:bg-inherit max-[1220px]:border-none`}
                    >
                        {iconList.map((item) => (
                            <MenuIcons
                                key={item.text}
                                IconName={item.IconName}
                                actives={item.actives}
                                liActive={item.liActive}
                                text={item.text}
                            />
                        ))}
                    </ul>

                    {active && (
                        <div>
                            <h3 className="text-secondary mt-10 mb-6">Social</h3>
                            <div className="flex gap-4 items-center mb-8">
                                <a
                                    href="https://www.instagram.com/17msenan/"
                                    target="_blank"
                                    className="text-secondary "
                                >
                                    <AiOutlineInstagram size={16} />
                                </a>
                                <a
                                    href="https://twitter.com/classZODWO"
                                    target="_blank"
                                    className="text-secondary"
                                >
                                    <FaTwitter size={16} />
                                </a>
                                <a
                                    href="https://wa.me/+9940505018809"
                                    target="_blank"
                                    className="text-secondary"
                                >
                                    <BsWhatsapp size={16} />
                                </a>
                                <a
                                    href="https://github.com/zodwo"
                                    target="_blank"
                                    className="text-secondary"
                                >
                                    <AiOutlineGithub size={16} />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Menu;
