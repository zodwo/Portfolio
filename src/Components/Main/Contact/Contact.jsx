import React from "react";
import SectionHeader from "../SectionHeader";

const Contact = ({ TfiEmail }) => {
    return (
        <>
            <SectionHeader
                icon={<TfiEmail />}
                text={"CONTACT"}
                size="text-[48px]"
                smsize="max-[585px]:text-[38px]"
                content={"Let's Work  "}
                specialContent={"Together!"}
                lading="leading-[70px]"
            />

            <h3 className="mb-16 text-2xl">sanan.m@div.edu.az</h3>

            <form action="" method="post" className="grid grid-cols-2">
                <div className="">
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" name="name" id="name" placeholder="Enter Full Name" />
                </div>
            </form>
        </>
    );
};

export default Contact;
