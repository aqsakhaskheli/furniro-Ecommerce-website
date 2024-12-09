import Image from "next/image";
import diningImge from "../../public/dining.png";
import livingRoomImage from "../../public/living.png";
import BedRoomImage from "../../public/bedroom.png";
import homeHeroImage from "../../public/heroImage.jpg";
import Card from "../app/components/Card";
import product1Image from "../../public/image 1.png";
import product2Image from "../../public/image 2.png";
import product3Image from "../../public/image 3.png";
import product4Image from "../../public/image 4.png";
import product6Image from "../../public/image 6.png";
import product7Image from "../../public/image 7.png";
import product8Image from "../../public/image 8.png";
import * as React from "react";

function home() {
  return (
    <div>
      {/* HEro section for Home Page */}
      <div>
        <Image src={homeHeroImage} alt="Hero section Image"></Image>
      </div>

      {/* Browse the range section */}
      <div className="w-screen py-10 px-5 flex flex-col justify-center items-center gap-7  ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl poppins-bold">Browse The Range</h1>
          <p className="text-[17px] poppins-regular text-slate-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <div className="flex justify-between items-center gap-10 flex-wrap">
          {/* 1 for dining room */}
          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src={diningImge}
              alt="Beautiful Dining Room image"
              className="h-96 w-80"
            ></Image>
            <h2 className="text-xl text-black poppins-semibold">Dining</h2>
          </div>

          {/* 2 for living room */}
          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src={livingRoomImage}
              alt="Beautiful Dining Room image"
              className="h-96 w-80"
            ></Image>
            <h2 className="text-xl text-black poppins-semibold  ">Living</h2>
          </div>

          {/* 3 for bed room */}
          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src={BedRoomImage}
              alt="Beautiful Dining Room image"
              className="h-96 w-80 "
            ></Image>
            <h2 className="text-xl text-black poppins-semibold  ">Bedroom</h2>
          </div>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="w-screen min-h-screen py-10 px-5 flex flex-col justify-center items-center gap-7">
        {/* heading [text section] */}
        <div>
          <h1 className="text-[#3a3a3a] poppins-bold  text-4xl">Our Products</h1>
        </div>
        {/* products images section */}
        <div className="flex justify-center items-center gap-8 flex-wrap">
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
       \      <Card
            image={product8Image}
            brandName="Porty"
            productName="Minimalist Pot Set"
            newPrice={50000}
            oldPrice={3500000}
            discount="New"
          />
        </div>
        <button className="py-3 px-8 border-[1.2px] border-[#B88E2F] poppins-medium text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white">Show More</button>
      </div>

      
    </div>
  );
}

export default home;