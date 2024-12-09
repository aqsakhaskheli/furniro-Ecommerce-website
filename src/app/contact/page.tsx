import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { GoClockFill } from "react-icons/go";
import aboutHeroImage from "../../../public/aboutImage.png";
import Badge from "../components/Badge";

function Page() {
  return (
    <div className="w-full py-20">
      {/* Hero Section */}
      <div className="relative">
        <Image
          src={aboutHeroImage}
          alt="Hero section image for contact page"
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black text-center">
          <h1 className="text-2xl sm:text-4xl font-bold mb-4">Contact</h1>
          <h4 className="text-sm sm:text-lg flex items-center gap-2">
            Home <IoIosArrowForward /> Contact
          </h4>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-20 flex flex-col items-center px-4 sm:px-14">
        {/* Heading Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-4xl font-bold text-black mb-3">
            Get In Touch With Us
          </h1>
          <p className="text-sm sm:text-[16px] text-[#9f9f9f]">
            For more information about our products & services. Please feel free
            to drop us an email. Our staff is always here to help you out.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 w-full">
          {/* Contact Details */}
          <div className="w-full lg:w-[40%] flex flex-col gap-6">
            <ul className="flex flex-col gap-6">
              <li>
                <h1 className="text-xl sm:text-2xl font-medium text-black flex gap-4">
                  <FaLocationDot /> Address
                </h1>
                <p className="text-sm sm:text-[16px] text-black">
                  236 Fifth SE Avenue, New York NY10000, United States
                </p>
              </li>
              <li>
                <h1 className="text-xl sm:text-2xl font-medium text-black flex gap-4">
                  <MdCall /> Phone
                </h1>
                <p className="text-sm sm:text-[16px] text-black">
                  Mobile: +(84) 345-5678
                </p>
                <p className="text-sm sm:text-[16px] text-black">
                  Hotline: +(84) 543-5678
                </p>
              </li>
              <li>
                <h1 className="text-xl sm:text-2xl font-medium text-black flex gap-4">
                  <GoClockFill /> Working Time
                </h1>
                <p className="text-sm sm:text-[16px] text-black">
                  Monday - Friday: 9:00 - 22:00
                </p>
                <p className="text-sm sm:text-[16px] text-black">
                  Saturday - Sunday: 9:00 - 21:00
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-[50%] flex flex-col gap-6">
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-lg font-medium text-black">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Abc"
                className="py-3 sm:py-4 text-sm sm:text-[16px] text-[#9f9f9f] border border-slate-400 rounded-md pl-4"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-lg font-medium text-black">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Abc@def.com"
                className="py-3 sm:py-4 text-sm sm:text-[16px] text-[#9f9f9f] border border-slate-400 rounded-md pl-4"
              />
            </div>

            {/* Subject Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-lg font-medium text-black">
                Subject
              </label>
              <input
                type="text"
                placeholder="This is optional"
                className="py-3 sm:py-4 text-sm sm:text-[16px] text-[#9f9f9f] border border-slate-400 rounded-md pl-4"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm sm:text-lg font-medium text-black">
                Message
              </label>
              <textarea
                placeholder="Hi I would like to ask about"
                className="py-3 sm:py-4 text-sm sm:text-[16px] text-[#9f9f9f] border border-slate-400 rounded-md pl-4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="bg-[#B88E2F] text-white rounded-md py-3 sm:py-2 px-4 sm:px-8 text-sm sm:text-[16px]">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <Badge />
    </div>
  );
}

export default Page;