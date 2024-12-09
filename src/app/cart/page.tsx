import React from "react";
import Image from "next/image";
import aboutHeroImage from "../../../public/aboutImage.png";
import cartImage from "../../../public/image 6.png";
import { IoIosArrowForward } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Badge from "../components/Badge";
import Link from "next/link";

function page() {
  return (
    <div className="w-screen relative pt-20 pb-10">
      {/* Hero Image */}
      <div className="relative">
        <Image
          src={aboutHeroImage}
          alt="hero section image for about page"
          className="w-full h-[400px] object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-0 text-black text-center">
          <h1 className="text-4xl poppins-medium mb-4">Cart</h1>
          <h4 className="text-lg flex items-center gap-2 poppins-regular">
            Home <IoIosArrowForward /> Cart
          </h4>
        </div>
      </div>

      {/* cart items section */}
      <div className="py-20 px-14 flex justify-between items-center w-screen gap-10 flex-wrap">
        {/* 1st part product details */}
        <div className="w-[65%] flex flex-col justify-center  gap-8">
          <ul className="bg-[#F9F1E7] flex flex-col md:flex-row justify-around items-center py-6 px-14 poppins-semibold text-[16px] text-black">
            <li>Product</li>
            <li>Price</li>
            <li>Quantity</li>
            <li>Subtotal</li>
          </ul>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src={cartImage}
              alt="cart item image"
              width={150}
              height={150}
            ></Image>
            <h1 className="poppins-regular text-[16px] text-[#898989]">
              Asgaard Sofa
            </h1>
            <h2 className="poppins-regular text-[16px] text-[#898989]">
              Rs.250,000.00
            </h2>
            <p className="poppins-regular text-[16px] text-[#898989] border-[1.3px] border-slate-500 py-2 px-4 rounded-md ">
              1
            </p>
            <h2 className="poppins-regular text-[16px] text-black">
              Rs.250,000.00
            </h2>
            <MdDelete className="text-[#B88E2F] text-xl" />
          </div>
        </div>
        {/* 2nd part product card */}
        <div className="w-[30%] py-10 flex flex-col justify-center items-center gap-8 bg-[#f9f1e7]">
          <h1 className="poppins-semibold text-2xl text-black">Cart Total</h1>
          <p className="flex items-center gap-7 md:gap-10">
            <span className="poppins-semibold text-[16px] ">Subtotal</span>{" "}
            <span className="text-[12px] text-[#898989]">250,000.00</span>
          </p>
          <p className="flex items-center gap-7 md:gap-10">
            <span className="poppins-semibold text-[16px] ">Total</span>{" "}
            <span className="text-xl text-[#b88e2f]">250,000.00</span>
          </p>
          <button className="text-xl py-3 px-7 border-[1.2px] border-black rounded-lg">
            <Link href={"/CheckOut"}>Check Out</Link>
            
          </button>
        </div>
      </div>
      <Badge />
    </div>
  );
}

export default page;