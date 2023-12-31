import React from "react";
import SectionHeader from "../SectionHeader";
import { BsGithub, BsGit } from "react-icons/bs";
import { FaReact, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiJquery, SiTailwindcss } from "react-icons/si";
import { DiSass } from "react-icons/di";

const Skills = ({ MdOutlineSwapHorizontalCircle }) => {
    const Skill = ({ Icon, name, score, data }) => {
        return (
            <div className="skills mb-8 flex flex-col items-center " data-aos={data}>
                <div className="w-full h-60 border-2 border-border rounded-[85px] flex items-center justify-center flex-col gap-4 transition-all duration-300">
                    <Icon size={70} />
                    <span className="mt-5 text-primary text-4xl">{score}%</span>
                </div>
                <div className="mt-4">{name}</div>
            </div>
        );
    };

    return (
        <>
            <SectionHeader
                icon={<MdOutlineSwapHorizontalCircle />}
                text={"Skills"}
                size="text-[48px]"
                smsize="max-[585px]:text-[38px]"
                content={"My "}
                specialContent={"Advantages"}
                lading="leading-[70px]"
                data="fade-up"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
                <Skill Icon={FaReact} name={"React"} score={62} data="fade-down-right" />
                <Skill Icon={IoLogoJavascript} name={"JavaScript"} score={85} data="fade-up" />
                <Skill Icon={SiJquery} name={"jQuery"} score={73} data="fade-down" />
                <Skill Icon={SiTailwindcss} name={"Tailwind"} score={78} data="fade-left"/>
                <Skill Icon={FaBootstrap} name={"Bootstrap"} score={85} data="fade-right"/>
                <Skill Icon={DiSass} name={"Sass"} score={83} data="fade-up-right" />
                <Skill Icon={BsGithub} name={"GitHub"} score={65} data="fade-up" />
                <Skill Icon={BsGit} name={"Git"} score={53} data="fade-up" />
            </div>
        </>
    );
};

export default Skills;
