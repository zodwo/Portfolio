import SectionHeader from "../SectionHeader";

const About = ({ AiOutlineUser }) => {

    return (
        <>
            <SectionHeader
                icon={<AiOutlineUser />}
                size="text-[48px]"
                smsize="max-[585px]:text-[38px]"
                text={"ABOUT"}
                content={"Coding is the way to communicate with   "}
                specialContent={"computers"}
                lading="leading-[70px]"
            />
            <ul className="text-secondary flex flex-col gap-5">
                <li>
                    <h1 className="font-bold text-xl">
                        I am <span className="text-primary">Sanan</span>,
                    </h1>
                    <p className="ps-2 leading-7">
                        A passionate web developer with 6 months of intensive web development experience. I can take your projects to the
                        next level with my expertise in front-end technologies.
                    </p>
                </li>

                <li>
                    <h2 className="font-bold">
                        UI <span className="text-[#213363]">Frameworks</span>
                    </h2>
                    <p className="ps-2 leading-7">
                        I can effectively use popular UI frameworks like <b>Bootstrap</b> and <b>Tailwind</b> CSS to develop fast and beautiful user
                        interfaces. This allows me to speed up your projects and provide an excellent user experience.
                    </p>
                </li>

                <li>
                    <h2 className="font-bold">
                        <span className="text-[#1B6B93]">JavaScript</span>:
                    </h2>
                    <p className="ps-2 leading-7">
                        I have experience with both <b>jQuery</b> and modern JavaScript libraries and frameworks, particularly <b className="text-[#068DA9]">React</b>. With my
                        skills in creating interactive web applications and managing data-driven processes, I can facilitate user
                        interaction on your website.
                    </p>
                </li>
            </ul>
        </>
    );
};

export default About;
