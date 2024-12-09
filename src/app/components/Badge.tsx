import React from "react";
import Image from "next/image";
import trophee from "../../public/trophy 1.png";
import guarantee from "../../public/guarantee.png";
import shipping from "../../public/shipping.png";
import help from "../../public/customer-support.png";

function Badge() {
  return (
    <div>
      {/* Badges Section */}
      <div className="w-screen py-14 px-6 md:px-14 bg-[#faf3ea] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Badge 1 - High Quality */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-2">
          <div>
            <Image src={trophee} alt="Trophy image" />
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl text-[#242424] poppins-semibold">
              High Quality
            </h2>
            <p className="text-[16px] md:text-[18px] text-slate-500 poppins-medium">
              Crafted from top materials
            </p>
          </div>
        </div>

        {/* Badge 2 - Warranty Protection */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-2">
          <div>
            <Image src={guarantee} alt="Guarantee badge image" />
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl text-[#242424] poppins-semibold">
              Warranty Protection
            </h2>
            <p className="text-[16px] md:text-[18px] text-slate-500 poppins-medium">
              Over 2 years
            </p>
          </div>
        </div>

        {/* Badge 3 - Free Shipping */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-2">
          <div>
            <Image src={shipping} alt="Shipping image" />
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl text-[#242424] poppins-semibold">
              Free Shipping
            </h2>
            <p className="text-[16px] md:text-[18px] text-slate-500 poppins-medium">
              Order over $150
            </p>
          </div>
        </div>

        {/* Badge 4 - Customer Support */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-2">
          <div>
            <Image src={help} alt="Support image" />
          </div>
          <div className="flex flex-col gap-1 text-center md:text-left">
            <h2 className="text-xl md:text-2xl text-[#242424] poppins-semibold">
              24 / 7 Support
            </h2>
            <p className="text-[16px] md:text-[18px] text-slate-500 poppins-medium">
              Dedicated Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Badge;