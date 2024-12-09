import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { BsCalendarDateFill } from "react-icons/bs";
import { TbLabelFilled } from "react-icons/tb";
import Link from "next/link";

interface BlogProps {
  image: StaticImageData;
  title: string;
  content: string;
}

function BlogCard({ image, title, content }: BlogProps) {
  return (
    <div className="flex flex-col justify-start gap-4 w-full sm:w-[500px]">
      {/* Blog Image */}
      <div className="w-full h-48 md:h-72">
        <Image
          src={image}
          alt="Blog Thumbnail"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Meta Information */}
      <ul className="flex flex-wrap justify-start items-center gap-4 text-xs sm:text-sm poppins-regular text-[#9f9f9f]">
        <li className="flex items-center gap-1">
          <CgProfile className="text-base sm:text-lg" />
          <span>Admin</span>
        </li>
        <li className="flex items-center gap-1">
          <BsCalendarDateFill className="text-base sm:text-lg" />
          <span>19-Oct-2022</span>
        </li>
        <li className="flex items-center gap-1">
          <TbLabelFilled className="text-base sm:text-lg" />
          <span>Wood</span>
        </li>
      </ul>

      {/* Blog Title */}
      <h2 className="text-lg sm:text-2xl poppins-semibold text-black">
        {title}
      </h2>

      {/* Blog Content */}
      <p className="text-sm sm:text-[15px] poppins-regular text-[#9f9f9f] leading-relaxed">
        {content}
      </p>

      {/* Read More Link */}
      <div>
        <Link
          href="/"
          className="text-sm sm:text-[16px] poppins-regular text-black border-b-2 border-black pb-1 hover:text-gray-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;