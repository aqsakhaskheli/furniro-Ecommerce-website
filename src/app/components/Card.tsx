import { StaticImageData } from "next/image";
import * as React from "react";
import Image from "next/image";
import { GiShare } from "react-icons/gi";
import { HiArrowsRightLeft } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";

interface Props {
  image: StaticImageData;
  brandName: string;
  productName: string;
  newPrice: number;
  oldPrice?: number; // Optional
  discount?: string; // Optional
}

function Card({
  image,
  brandName,
  productName,
  newPrice,
  oldPrice,
  discount,
}: Props) {
  // Format numbers with thousand separators
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="w-72 min-h-80 bg-[#F4F5F7] shadow-md shadow-slate-400 relative group">
      <div className="relative">
        <Image src={image} alt="Product Image" />
        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 right-2 bg-[#E97171] text-white text-center py-3 px-2 rounded-full text-sm font-semibold transition-opacity duration-300 group-hover:opacity-0">
            {discount}
          </div>
        )}
      </div>

      {/* Card Info */}
      <div className="p-4 flex flex-col gap-3">
        <h2 className="text-2xl poppins-semibold  text-[#3a3a3a]">{brandName}</h2>
        <h2 className="text-[16px] text-[#898989] poppins-medium">{productName}</h2>
        <div className="flex gap-2 items-center">
          <h1 className="text-xl text-[#3a3a3a] poppins-medium ">
            {formatPrice(newPrice)}
          </h1>
          {oldPrice && (
            <h1 className="line-through text-[#b0b0b0] text-[16px] poppins-regular transition-opacity duration-300 group-hover:opacity-0">
              {formatPrice(oldPrice)}
            </h1>
          )}
        </div>
      </div>

      {/* Hover Effects and Buttons */}
      <div className="absolute inset-0 bg-slate-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-4">
        <div>
          <button className="bg-white text-[#B88E2F] px-4 py-2">Add to Cart</button>
        </div>
        <div>
          <button className="text-white px-3 py-2">
            <div className="flex justify-center items-center gap-1 font-medium text-[16px]">
              <GiShare />
              <h3>Share</h3>
            </div>
          </button>
          <button className="text-white px-3 py-2">
            <div className="flex justify-center items-center gap-1 font-medium text-[16px]">
              <HiArrowsRightLeft />
              <h3>Compare</h3>
            </div>
          </button>
          <button className="text-white px-3 py-2">
            <div className="flex justify-center items-center gap-1 font-medium text-[16px]">
              <GoHeart />
              <h3>Like</h3>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;