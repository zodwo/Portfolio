import React from "react";
import SectionHeader from "../SectionHeader";
import { AiOutlineCloudUpload } from "react-icons/ai";

const Contact = ({ TfiEmail }) => {
    const numberHandler = (e) => {
        const regex = /^[0-9+]+$/;

        if (!regex.test(e.target.value)) {
            e.target.value = e.target.value.replace(/[^0-9]/g, "");
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        e.target.reset();
    };

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
                data={"fade-up"}
            />

            <form className="mt-16 " action="./Submit.php" method="post" encType="multipart/form-data" onSubmit={submitHandler}>
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="mb-12" data-aos="fade-right">
                        <label htmlFor="name" className="block text-[12px] mb-4">
                            FULL NAME
                        </label>
                        <input
                            autoComplete="off"
                            required
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Full Name"
                            className="bg-transparent outline-none"
                        />
                    </div>
                    <div className="mb-12" data-aos="fade-left">
                        <label htmlFor="email" className="block text-[12px] mb-4">
                            EMAIL
                        </label>
                        <input
                            autoComplete="off"
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email Adress"
                            className="bg-transparent outline-none"
                        />
                    </div>
                    <div className="mb-12" data-aos="fade-right">
                        <label htmlFor="phone" className="block text-[12px] mb-4">
                            PHONE (OPTIONAL)
                        </label>
                        <input
                            autoComplete="off"
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Your Phone Number"
                            onInput={numberHandler}
                            className="bg-transparent outline-none appearance-none"
                        />
                    </div>
                    <div className="mb-12" data-aos="fade-left">
                        <label htmlFor="budget" className="block text-[12px] uppercase mb-4">
                            your budget (optional)
                        </label>
                        <input
                            autoComplete="off"
                            type="text"
                            name="budget"
                            id="budget"
                            placeholder="Enter Your Budget"
                            onInput={numberHandler}
                            className="bg-transparent outline-none"
                        />
                    </div>
                </div>

                <div data-aos="fade-up">
                    <label htmlFor="mesaj" className="block text-[12px] uppercase mb-4">
                        Message (optional)
                    </label>

                    <textarea
                        autoComplete="off"
                        required
                        name="mesaj"
                        id="mesaj"
                        rows="5"
                        className="w-full bg-transparent outline-none min-h-[200px]"
                        placeholder="Write your message here ..."
                    ></textarea>
                </div>

                <label htmlFor="file" className="uppercase text-[12px] flex gap-3">
                    <AiOutlineCloudUpload size={20} /> add an attachment
                </label>
                <input type="file" name="file" id="file" className="hidden" />

                <button
                    className="py-4 px-12 mt-16 bg-primary text-black rounded-full hover:bg-black border border-primary hover:text-primary
                transition-all duration-300
                "
                >
                    SEND MESSAGE
                </button>
            </form>
        </>
    );
};

export default Contact;
