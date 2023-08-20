import React from "react";
import SectionHeader from "../SectionHeader";
import { BsArrowDown } from "react-icons/bs";
import RotateImg from "../../../Assets/Img/round-text.png";

const Home = ({ AiOutlineHome }) => {
    const content = "Say Hi from ";
    const specialContent = "Sanan ";
    const secondaryContent = "Frontend Web Developer";
    return (
        <>
            <SectionHeader
                text="INTRODUCE"
                icon={<AiOutlineHome size={13.9} />}
                content={content}
                specialContent={specialContent}
                secondaryContent={secondaryContent}
            />

            <p className="max-w-[480px] text-secondary text-[17px] mb-8">
                I code beautifully simple things and i love what i do. Just simple like that!
            </p>

            <div className="flex justify-end">
                <a href="#portfolio" className="relative flex items-center justify-center h-44 w-44 border border-border rounded-full">
                    <BsArrowDown size={34} />
                    <img className="absolute animate-spin-slow  " src={RotateImg} alt="r" />
                </a>
            </div>

            <div className="flex gap-32">
                <div className="mt-8">
                    <h1 className="text-primary text-[72px] mb-10 leading-10 ">1+</h1>
                    <p className=" text-secondary uppercase w-32">Years of Experience</p>
                </div>
                <div className="mt-8">
                    <h1 className="text-primary text-[72px] mb-10 leading-10 ">7+</h1>
                    <p className=" text-secondary uppercase w-32">Completed Projects</p>
                </div>
            </div>
        </>
    );
};

export default Home;
