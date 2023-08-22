import React, { useState } from "react";
import SectionHeader from "../SectionHeader";

const Resume = ({ PiBagFill }) => {
    const Experience = ({ date }) => {
        return (
            <div className="text-secondary mb-7 hd transition-all duration-300 date" data-aos="fade-left">
                {date}
            </div>
        );
    };

    const ExperienceItem = ({ header, content }) => {
        return (
            <div className=" mb-5" data-aos="fade-left">
                <div className="text-[24px] mb-1">{header}</div>
                <div className="text-sm text-secondary">{content}</div>
            </div>
        );
    };

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
                data="fade-up"
            />

            <div className="">
                <div
                    className={`
                    custom
                    max-[585px]:ps-10 ps-20 pb-20 before:border-l relative before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:border-border after:absolute after:left-[-8px] after:z-10 after:top-0 after:h-4 after:w-4 after:rounded-full after:bg-border
                    hover:after:!bg-primary after:transition-all duration-500 
                `}
                    data-aos="fade-left"
                >
                    <Experience date="2023 - Present" />
                    <ExperienceItem header="Frontend Web Developer" content="Self Study" />
                    <ExperienceItem header="University" content="BDU / Information Technology" />
                    <ExperienceItem header="Custom Course" content="Div Academy" />
                </div>

                <div
                    className={`
                    custom
                    max-[585px]:ps-10 ps-20 before:border-l relative before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:border-border after:absolute after:left-[-8px] after:z-10 after:top-0 after:h-4 after:w-4 after:rounded-full after:bg-border after:transition-all duration-500   hover:after:!bg-primary
                `}
                    data-aos="fade-left"
                >
                    <Experience date="2020 - 2023" />
                    <ExperienceItem header="College" content="Telecommunication" />
                </div>
            </div>
        </>
    );
};

export default Resume;
