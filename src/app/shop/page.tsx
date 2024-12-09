import * as React from "react"
import Image from "next/image";
import aboutHeroImage from "../../../public/aboutImage.png";
import { IoIosArrowForward } from "react-icons/io";
import { VscListFilter } from "react-icons/vsc";
import { RiApps2Fill } from "react-icons/ri";
import { VscBrowser } from "react-icons/vsc";
import Card from "../components/Card";
import product1Image from "../../../public/image 1.png";
import product2Image from "../../../public/image 2.png";
import product3Image from "../../../public/image 3.png";
import product4Image from "../../../public/image 4.png";
import product6Image from "../../../public/image 6.png";
import product7Image from "../../../public/image 7.png";
import product8Image from "../../../public/image 8.png";
import Badge from "../components/Badge";

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
          <h1 className="text-4xl poppins-medium mb-4">Shop</h1>
          <h4 className="text-lg flex items-center gap-2 poppins-regular">
            Home <IoIosArrowForward /> Shop
          </h4>
        </div>
      </div>
      {/* hero section bottom */}

      <div className="hidden md:flex justify-between items-center py-7 px-10 bg-[#F9F1E7]">
        {/* Filter Section */}
        <div className="flex justify-center items-center gap-8">
          <div className="flex justify-center items-center gap-4 px-6 border-r-[1.2px] border-slate-500">
            <h2 className="flex justify-center items-center gap-2 text-xl font-normal">
              <VscListFilter /> Filter
            </h2>
            <h2 className="text-2xl">
              <RiApps2Fill />
            </h2>
            <h2 className="text-2xl">
              <VscBrowser />
            </h2>
          </div>

          {/* Results Info */}
          <div>
            <p className="text-xl text-slate-500">
              Showing 1 - 16 of 32 results
            </p>
          </div>
        </div>

        {/* Show and Sort Section */}
        <div className="flex items-center gap-6">
          {/* Show */}
          <div className="flex items-center gap-2">
            <p className="text-xl text-black font-normal">Show</p>
            <div className="text-[#9f9f9f] text-[16px] bg-white px-4 py-2 rounded-md">
              16
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <p className="text-xl text-black font-normal">Sort by</p>
            <div className="text-[#9f9f9f] text-[16px] bg-white px-4 py-2 rounded-md">
              Default
            </div>
          </div>
        </div>
      </div>

      {/* product sections */}
      <div className="flex justify-center items-center gap-8 flex-wrap mt-14 z-10 ">
        <Card
          image={product1Image}
          brandName="Syltherine"
          productName="Stylish Cafe Chair"
          newPrice={2500000}
          oldPrice={3500000}
          discount="30%"
        />
        <Card
          image={product2Image}
          brandName="Leviosa"
          productName="Stylish Cafe Chair"
          newPrice={2500000}
        />
        <Card
          image={product3Image}
          brandName="Lolito"
          productName="Luxury Big Sofa"
          newPrice={7500000}
          oldPrice={1400000}
          discount="30%"
        />
        <Card
          image={product4Image}
          brandName="Respira"
          productName="Outdoor Bar Table and Stool"
          newPrice={2500000}
          discount="New"
        />
        <Card
          image={product4Image}
          brandName="Grifo"
          productName="Night lamp"
          newPrice={1500000}
        />
        <Card
          image={product6Image}
          brandName="Muggo"
          productName="Small Mug"
          newPrice={150000}
          discount="New"
        />
        <Card
          image={product7Image}
          brandName="Pingky"
          productName="Cute Bed Set"
          newPrice={2500000}
          oldPrice={3500000}
          discount="30%"
        />
        <Card
          image={product8Image}
          brandName="Porty"
          productName="Minimalist Pot Set"
          newPrice={50000}
          oldPrice={3500000}
          discount="New"
        />
        <Card
          image={product1Image}
          brandName="Syltherine"
          productName="Stylish Cafe Chair"
          newPrice={2500000}
          oldPrice={3500000}
          discount="30%"
        />
        <Card
          image={product2Image}
          brandName="Leviosa"
          productName="Stylish Cafe Chair"
          newPrice={2500000}
        />
        <Card
          image={product3Image}
          brandName="Lolito"
          productName="Luxury Big Sofa"
          newPrice={7500000}
          oldPrice={1400000}
          discount="30%"
        />
        <Card
          image={product4Image}
          brandName="Respira"
          productName="Outdoor Bar Table and Stool"
          newPrice={2500000}
          discount="New"
        />
        <Card
          image={product1Image}
          brandName="Syltherine"
          productName="Stylish Cafe Chair"
          newPrice={2500000}
          oldPrice={3500000}
          discount="30%"
        />
        <Card
          image={product2Image}
          brandName="Leviosa"
          productName="Stylish Cafe Chair"
          newPrice={2500000}
        />
        <Card
          image={product3Image}
          brandName="Lolito"
          productName="Luxury Big Sofa"
          newPrice={7500000}
          oldPrice={1400000}
          discount="30%"
        />
        <Card
          image={product4Image}
          brandName="Respira"
          productName="Outdoor Bar Table and Stool"
          newPrice={2500000}
          discount="New"
        />
      </div>

      {/* page paginations section */}
      <div className="flex justify-center items-center gap-8 py-14 ">
        <button className="bg-[#FAF3EA] text-black text-xl px-4 py-2 rounded-md hover:bg-[#B88E2F]">
          1
        </button>
        <button className="bg-[#FAF3EA] text-black text-xl px-4 py-2 rounded-md hover:bg-[#B88E2F]">
          2
        </button>
        <button className="bg-[#FAF3EA] text-black text-xl px-4 py-2 rounded-md hover:bg-[#B88E2F]">
          3
        </button>
        <button className="bg-[#FAF3EA] text-black text-xl px-4 py-2 rounded-md hover:bg-[#B88E2F]">
          Next
        </button>
      </div>

      {/* Badges section  */}
      <Badge/>
    </div>
  );
}

export default page;