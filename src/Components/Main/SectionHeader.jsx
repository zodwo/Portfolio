import React from "react";

const InfoButton = ({ icon, text, content, specialContent, secondaryContent }) => {
    return (
        <>
            <div className="inline-flex items-center px-5 py-2 border border-border gap-3 rounded-3xl mb-12">
                {icon}
                <span className="text-[12px]">{text}</span>
            </div>

            <h1 className="max-[585px]:text-[50px] max-[788px]:text-[56px] text-[76px] font-inter font-light mb-8 leading-[90px]">
                {content}
                <span className="text-primary">{specialContent}</span>
                {secondaryContent}
            </h1>
        </>
    );
};

export default InfoButton;
