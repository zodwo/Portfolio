import React from "react";

const MenuIcons = ({ IconName, liActive, text, actives, setActives }) => {
    return (
        <li
            className={`${liActive && "active"}
            ${actives ? "gap-3" : "justify-center  "} 
            cursor-pointer flex w-full  items-center 
            hover:text-primary transition-colors duration-200
            d `}
        >
            <IconName size={18} />
            {actives && <span>{text}</span>}
        </li>
    );
};

export default MenuIcons;
