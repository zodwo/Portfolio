import React from "react";
import { AiOutlineInstagram, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import img from "../../Assets/Img/me.jpg";

const Profile = () => {
    const SocialIcon = ({ ExampleIcon, link }) => {
        return (
            <a
                href={link}
                target="_blank"
                className="w-[50px] 2xl:w-14 h-[50px]  2xl:h-14 rounded-full border border-border hover:border-primary hover:text-primary flex items-center justify-center text-secondary transition-all duration-300"
            >
                <ExampleIcon size={22} />
            </a>
        );
    };

    return (
        <div
            className="max-w-[350px] w-full border-border 
            border   rounded-3xl bg-black bg-opacity-70 
            2xl:h-[764px] h-[664px] 2xl:max-w-[400px] p-8 2xl:p-12 max-[1220px]:relative max-[1220px]:top-0 max-[1220px]:translate-y-0
            max-[1220px]:max-w-full max-[1220px]:left-0 max-[1220px]:mb-16  "
            data-aos="fade-down-right"
        >
            <div className="flex items-center justify-between mb-7">
                <div className="flex ">
                    <span className="text-[40px] font-bold">Sanan</span>
                    <div className="w-5 h-5 rounded-full border border-white flex items-center justify-center relative top-3 left-1">
                        S
                    </div>
                </div>

                <div className="text-right">
                    Frontend Web <br /> Developer
                </div>
            </div>

            <picture className="block h-[210px] w-[250px] mx-auto 2xl:mx-0 2xl:h-[250px] 2xl:max-w-[300px] 2xl:w-full mb-8 2xl:mb-12  ">
                <div
                    className=" h-full w-full rounded-3xl bg-right bg-cover  "
                    style={{ backgroundImage: `url(${img})`, backgroundSize: "140% 140% " }}
                ></div>
            </picture>

            <h2 className="text-2xl text-center mb-2">sanan.fwr@gmail.com</h2>
            <h2 className="text-2xl 2xl:text-[26px] mb-8 max-[1220px]:text-center">
                Based in Azerbaijan, Baku
            </h2>
            <p className="text-center text-secondary text-sm mb-6">
                © 2023 Sanan. All Rights Reserved
            </p>

            <div className="flex gap-4 items-center justify-center mb-8">
                <SocialIcon
                    ExampleIcon={AiOutlineInstagram}
                    link={"https://www.instagram.com/17msenan/"}
                />
                <SocialIcon ExampleIcon={FaTwitter} link={"https://twitter.com/classZODWO"} />
                <SocialIcon ExampleIcon={BsWhatsapp} link={"https://wa.me/+9940505018809"} />
                <SocialIcon ExampleIcon={AiOutlineGithub} link={"https://github.com/zodwo"} />
            </div>

            <a
                className=" flex items-center justify-center gap-3 bg-primary h-12 rounded-full text-black 
                hover:bg-black hover:text-primary hover:border border-primary transition-all duration-300"
                href="#Contact"
            >
                <AiOutlineMail size={20} /> HIRE ME!
            </a>
        </div>
    );
};

export default Profile;
