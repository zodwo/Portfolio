import React, { useState } from "react";

const MenuIcons = ({ IconName, text, actives, liActive }) => {
    //

    const handleItemClick = (li) => {
        const allLink = document.querySelectorAll(".customButton");

        allLink.forEach((link) => {
            link.classList.remove("active");
        });

        li.classList.add("active");
        scrollHandler();
    };

    const scrollHandler = () => {
        const allLink = document.querySelectorAll(".customButton");

        sections.forEach((section) => {
            allLink.forEach((link) => {
                const a = link.querySelector("a");
                const id = section.getAttribute("id");

                if (section.getBoundingClientRect().top <= 200) {
                    if (a.getAttribute("href") == `#${id}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                }
            });
        });
    };

    window.addEventListener("scroll", scrollHandler);

    const [mouse, setMouse] = useState(false);

    const mouseHandler = () => {
        setMouse(true);
    };

    return (
        <li
            onMouseEnter={mouseHandler}
            onMouseLeave={() => setMouse(false)}
            onClick={(e) => handleItemClick(e.currentTarget)}
            className={`${liActive && "active"}
            ${
                actives ? "gap-3" : "justify-center  "
            } cursor-pointer flex items-center w-full   hover:text-primary 
            transition-colors duration-200 customButton`}
        >
            <a
                href={`#${text}`}
                className={`${
                    actives && "flex items-center gap-3 !justify-normal"
                } relative w-full flex items-center justify-center`}
            >
                {IconName}
                <div
                    className={`${mouse ? "absolute left-[-10px] -top-1 " : "hidden"} ${
                        actives && "!block"
                    }`}
                >
                    <span
                        className={`${
                            mouse &&
                            "absolute right-0  bg-[#404042] !text-white rounded-md text-[12px] py-1 px-3"
                        } `}
                        role="tooltip"
                    >
                        {text}
                        {mouse && (
                            <div className="tooltip absolute -right-2 top-[50%] translate-y-[-50%] "></div>
                        )}
                    </span>
                </div>
            </a>
        </li>
    );
};

export default MenuIcons;
