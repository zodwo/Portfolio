import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import Projects from "../../../Data/Portfolio.json";

const Portfolio = ({ MdOutlineWebStories }) => {
    const [endSlice, setEndSlice] = useState(3);

    const MyProjectItem = Projects.slice(0, endSlice).map((project) => {
        return (
            <div className="mb-10 proje" key={project.id}>
                <div className="relative cursor-pointer " data-aos="fade-up">
                    <picture>
                        <img className="rounded-3xl min-h-[210px] h-full max-h-[380px] " src={project.img} alt={project.name} />
                    </picture>

                    <div className="flex gap-4 absolute bottom-4 left-7">
                        <a className="px-5 py-2 bg-white text-black rounded-2xl button" href={project.git} target="_blank">
                            GitHub
                        </a>
                        <a className="px-5 py-2 bg-white text-black rounded-2xl  button" href={project.demo} target="_blank">
                            Live Prewiew
                        </a>
                    </div>
                </div>

                <h2 className="mt-4 text-2xl project-text">
                    <a href={project.demo} target="_blank">
                        {project.name}
                    </a>
                </h2>
            </div>
        );

        // if (project.perfect) {
        //     return (
        //         <div className="mb-10 proje" key={project.id}>
        //             <div className="relative cursor-pointer ">
        //                 <picture>
        //                     <img className="rounded-3xl h-full max-h-[410px]" src={project.img} alt={project.name} />
        //                 </picture>

        //                 <div className="flex gap-4 absolute bottom-8 left-7">
        //                     <a className="px-5 py-2 bg-white text-black rounded-2xl button" href={project.git} target="_blank">
        //                         GitHub
        //                     </a>
        //                     <a className="px-5 py-2 bg-white text-black rounded-2xl  button" href={project.demo} target="_blank">
        //                         Live Prewiew
        //                     </a>
        //                 </div>
        //             </div>

        //             <h2 className="mt-4 text-2xl project-text">
        //                 <a href={project.demo} target="_blank">
        //                     {project.name}
        //                 </a>
        //             </h2>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div className="mb-10 flex gap-5" key={project.id}>
        //             <div className="proje">
        //                 <div className="relative cursor-pointer">
        //                     <picture>
        //                         <img className="rounded-3xl h-[410px] object-cover" src={project.img} alt={project.name} />
        //                     </picture>

        //                     <div className="flex gap-4 absolute bottom-8 left-7">
        //                         <a className="px-5 py-2 bg-white text-black rounded-2xl button" href={project.git} target="_blank">
        //                             GitHub
        //                         </a>
        //                         <a className="px-5 py-2 bg-white text-black rounded-2xl button" href={project.demo} target="_blank">
        //                             Live Prewiew
        //                         </a>
        //                     </div>
        //                 </div>

        //                 <h2 className="mt-4 text-2xl project-text">
        //                     <a href={project.demo} target="_blank">
        //                         {project.name}
        //                     </a>
        //                 </h2>
        //             </div>

        //             <div className="proje">
        //                 <div className="relative cursor-pointer">
        //                     <picture>
        //                         <img className="rounded-3xl h-[410px] object-cover" src={project.img} alt={project.name} />
        //                     </picture>

        //                     <div className="flex gap-4 absolute bottom-8 left-7">
        //                         <a className="px-5 py-2 bg-white text-black rounded-2xl button" href={project.git} target="_blank">
        //                             GitHub
        //                         </a>
        //                         <a className="px-5 py-2 bg-white text-black rounded-2xl button" href={project.demo} target="_blank">
        //                             Live Prewiew
        //                         </a>
        //                     </div>
        //                 </div>

        //                 <h2 className="mt-4 text-2xl project-text">
        //                     <a href={project.demo} target="_blank">
        //                         {project.name}
        //                     </a>
        //                 </h2>
        //             </div>
        //         </div>
        //     );
        // }
    });

    const showmore = (e) => {
        Projects.length > endSlice ? setEndSlice(endSlice + 2) : setEndSlice(Projects.length);

        Projects.length == endSlice && (e.target.disabled = true);
    };

    return (
        <>
            <SectionHeader
                icon={<MdOutlineWebStories />}
                text={"PORTFOLIO"}
                size="text-[48px]"
                smsize="max-[585px]:text-[38px]"
                content={"Featured "}
                specialContent={"Projects"}
                lading="leading-[70px]"
                data={"fade-up"}
            />

            <div className="">{MyProjectItem}</div>

            <button
                onClick={showmore}
                className="mx-auto block mt-8 px-5 p-2 border border-border
                hover:border-primary rounded-2xl hover:shadow-md hover:shadow-primary transition-all duration-300
                disabled:shadow-gray-600 disabled:border-gray-700 disabled:text-gray-700
                "
            >
                Show More
            </button>
        </>
    );
};

export default Portfolio;
