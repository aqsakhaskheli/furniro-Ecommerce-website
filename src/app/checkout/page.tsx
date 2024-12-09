import React from "react";
import aboutHeroImage from "../../../public/aboutImage.png";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Badge from "../components/Badge";

function page() {
  return (
    <div className="w-screen relative pt-20 pb-10">
      {/* hero section */}
      <div className="relative">
        <Image
          src={aboutHeroImage}
          alt="hero section image for about page"
          className="w-full h-[400px] object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-0 text-black text-center">
          <h1 className="text-4xl poppins-medium mb-4">Check Out</h1>
          <h4 className="text-lg flex items-center gap-2 poppins-regular">
            Home <IoIosArrowForward /> CheckOut
          </h4>
        </div>
      </div>

      {/* main content */}
      <div className="w-screen py-20 px-20 flex justify-start items-start gap-32 flex-wrap ">
        {/* billing details section [left] */}
        <div className="w-[50%] flex flex-col justify-center gap-8 ">
          <h1 className="poppins-bold text-xl text-black">Billing Details</h1>
          <div className="flex justify-between items-center">
            <div>
            <legend className="poppins-regular text-[14px]">First Name</legend>
            <input type="text" className="border-[1.2px] border-slate-900 py-2 px-4 rounded-md"/>
            </div>
            <div>
            <legend className="poppins-regular text-[14px]">Last Name</legend>
            <input type="text" className="border-[1.2px] border-slate-900 py-2 px-4 rounded-md"/>
          </div>
          </div>
          <legend  className="poppins-regular text-[14px]">Company Name (optional)</legend>
          <input type="text" className="py-3 px-4 border-[1.2px] border-slate-900 rounded-md"/>

          <legend  className="poppins-regular text-[14px]">Country Region</legend>
          <input type="text" className="py-3 px-4 border-[1.2px] border-slate-900 rounded-md"/>

          <legend  className="poppins-regular text-[14px]">Street Adress</legend>
          <input type="text" className="py-3 px-4 border-[1.2px] border-slate-900 rounded-md"/>

          <legend  className="poppins-regular text-[14px]">Town / City</legend>
          <input type="text" className="py-3 px-4 border-[1.2px] border-slate-900 rounded-md"/>

          <legend  className="poppins-regular text-[14px]">Province</legend>
          <input type="text" className="py-3 px-4 border-[1.2px] border-slate-900 rounded-md"/>

          <legend  className="poppins-regular text-[14px]">Zip code</legend>
          <input type="text" className="py-3 px-4 border-[1.2px] border-slate-900 rounded-md"/>

          <legend  className="poppins-regular text-[14px]">Phone</legend>
          <input type="text" className="py-3 px-4 border-[1.2px] border-slate-900 rounded-md"/>

          <legend  className="poppins-regular text-[14px]">Email</legend>
          <input type="text" className="py-3 px-4 border-[1.2px] border-slate-900 rounded-md"/>

          <textarea
            name="msg"
            id="msg"
            placeholder="Additional Information"
            className="py-3 px-4 border-[1.2px] border-slate-900 rounded-md"
          ></textarea>
        </div>

        {/* right section final details of products and bills */}
        <div className=" w-full md:w-[35%] flex flex-col justify-center">
          <div className="flex justify-between items-center py-4 border-b-[1.2px] border-slate-500">
            <ul className="">
              <li className="poppins-semibold text-[16px]">Product</li>
              <li className="poppins-regular text-[#898989] mt-3">Avogadro Sofa</li>
              <li className="poppins-regular text-[#000000] mt-3">Subtotal</li>
              <li className="poppins-regular text-[#000000] mt-3">Total</li>
            </ul>
            <ul>
              <li className="poppins-semibold text-[16px]">Sub Total</li>
              <li className="poppins-regular text-[#898989] mt-3">Rs. 25,000.00</li>
              <li className="poppins-regular text-[#898989] mt-3">Rs. 25,000.00</li>
              <li  className="poppins-semibold text-xl text-[#b88e2f] mt-3">Rs. 25,000.00</li>
            </ul>
          </div>

          <div className="flex flex-col  py-4 gap-3">
            <h1 className="text-black poppins-semibold">Direct Rank Transfer</h1>
            <p className="poppins-regular text-[#898989]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet hic
              incidunt itaque natus minus ipsum ab fuga debitis quisquam nam.
            </p>
            <p className="poppins-regular text-[#898989]">Direct Bank Transfer</p>
            <p className="poppins-regular text-[#898989]">Cash on delivery</p>
            <p className="poppins-regular text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo deleniti architecto dignissimos molestiae temporibus minus vero nam voluptas, impedit laudantium!</p>
            <button className="py-2 px-6 border-[1.2px] border-black text-center rounded-md hover:bg-[#b88e2f] hover:text-white">Place Order</button>
          </div>
        </div>
      </div>

      <Badge/>
    </div>
  );
}

export default page;