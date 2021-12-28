import React from "react";
import SocialMedia from "../Introduction/SocialMedia";
import ContactSocialMedia from "./ContactSocialMedia";

const Info = () => {
    return (
        <div className="bg-white w-1/2 h-full space-y-5 py-4">
            <h1 className="font-primary mx-auto w-5/6 text-3xl font-extrabold text-emerald-700">
                Let's get in touch
            </h1>
            <div className="flex w-5/6 mx-auto space-x-2">
                <img width={30} height={30} src="/location.png" alt="" />
                <p>Abi Firas El Hamadani khzema ouest 4071</p>
            </div>
            <div className="flex w-5/6 mx-auto space-x-2">
                <img width={30} height={30} src="/email.png" alt="" />
                <p>Halouani142@gmail.com</p>
            </div>
            <div className="flex w-5/6 mx-auto space-x-2">
                <img width={30} height={30} src="/phone.png" alt="" />
                <p>99 153 903</p>
            </div>
            <p className="font-primary text-xl w-5/6 mx-auto">
                Connect with us
            </p>
            <ContactSocialMedia/>
        </div>
    );
};

export default Info;
