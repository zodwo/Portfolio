import React from "react";

const InfoButton = ({ icon, text, content, specialContent, secondaryContent, size, mdsize, smsize, lading, data, className }) => {
    return (
        <>
            <div
                className={`${className} inline-flex items-center px-5 py-2 border border-border gap-3 rounded-3xl mb-12`}
                data-aos={data}
            >
                {icon}
                <span className="text-[12px]">{text}</span>
            </div>

            <h1 className={` ${size} ${mdsize} ${smsize} ${lading} font-inter font-light mb-8 `} data-aos={data}>
                {content}
                <span className="text-primary">{specialContent}</span>
                {secondaryContent}
            </h1>
        </>
    );
};
// ${cfgSmSize} ${cfgMdSize}
export default InfoButton;
