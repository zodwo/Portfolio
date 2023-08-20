import React, { useState } from "react";
import SectionHeader from "../SectionHeader";

const Resume = ({ PiBagFill }) => {
    const Experience = ({ date }) => {
        return <div className="text-secondary mb-7">{date}</div>;
    };

    const ExperienceItem = ({ header, content }) => {
        return (
            <div className=" mb-5">
                <div className="text-[24px] mb-1">{header}</div>
                <div className="text-sm text-secondary">{content}</div>
            </div>
        );
    };

    const [changeColor, SetChangeColor] = useState(false);
    
    return (
        <>
            <SectionHeader
                icon={<PiBagFill />}
                text={"RESUME"}
                size="text-[48px]"
                smsize="max-[585px]:text-[38px]"
                content={"Education & "}
                specialContent={"Experience"}
                lading="leading-[70px]"
            />

            <div className="">
                <div
                    className={`
                    ps-20 pb-20 before:border-l relative before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:border-border after:absolute after:left-[-10px] after:top-0 after:h-5 after:w-5 after:rounded-full after:bg-border
                `}
                >
                    <Experience date="2023 - Present" />
                    <ExperienceItem header="Frontend Web Developer" content="Self Study" />
                    <ExperienceItem header="University" content="Information Technology" />
                    <ExperienceItem header="Custom Course" content="Div Academy" />
                </div>

                <div
                    className={`
                    ps-20 before:border-l relative before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:border-border after:absolute after:left-[-10px] after:top-0 after:h-5 after:w-5 after:rounded-full after:bg-border
                `}
                >
                    <Experience date="2020 - 2023" />
                    <ExperienceItem header="College" content="Telecommunication" />
                </div>
            </div>
        </>
    );
};

export default Resume;
