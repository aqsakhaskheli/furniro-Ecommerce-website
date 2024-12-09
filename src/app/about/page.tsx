import * as React from "react";
import Image from "next/image";
import aboutHeroImage from "../../../public/aboutImage.png";
import { IoIosArrowForward } from "react-icons/io";
import BlogCard from "../components/BlogCard";
import Blog1Image from "../../../public/Blog1.png";
import Blog2Image from "../../../public/Blog2.png";
import Blog3Image from "../../../public/Blog3.png";
import { CiSearch } from "react-icons/ci";
import post1 from "../../../public/post1.png";
import post2 from "../../../public/post2.png";
import post3 from "../../../public/post3.png";
import post4 from "../../../public/post4.png";
import post5 from "../../../public/post5.png";

function Page() {
  return (
    <div className="w-full py-10">
      {/* Blog Hero Section */}
      <div className="relative">
        <Image
          src={aboutHeroImage}
          alt="Hero Section Image"
          className="w-full h-[300px] md:h-[400px] object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-0 text-black text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Blog</h1>
          <h4 className="text-sm md:text-lg flex items-center gap-2">
            Home <IoIosArrowForward /> Blog
          </h4>
        </div>
      </div>

      {/* Blog Main Section */}
      <div className="w-full px-4 md:px-14 lg:px-28 py-10 flex flex-col md:flex-row gap-8">
        {/* Left Side: Blogs */}
        <div className="w-full md:w-3/4 flex flex-col gap-8">
          <BlogCard
            image={Blog1Image}
            title="Going all in with millennial design"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis neque ea excepturi illo nisi! Autem soluta impedit nobis doloribus."
          />
          <BlogCard
            image={Blog2Image}
            title="Exploring new ways of decorating"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis neque ea excepturi illo nisi! Autem soluta impedit nobis doloribus."
          />
          <BlogCard
            image={Blog3Image}
            title="Handmade pieces that took time to make"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima blanditiis neque ea excepturi illo nisi! Autem soluta impedit nobis doloribus."
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/4 flex flex-col gap-10">
          {/* Search Box */}
          <div className="flex justify-between py-3 px-4 border-2 border-black text-xl rounded-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full outline-none text-sm"
            />
            <CiSearch />
          </div>

          {/* Categories */}
          <div>
            <h2 className="my-5 text-lg md:text-2xl font-medium text-black">
              Categories
            </h2>
            <ul className="flex flex-col gap-4 md:gap-6 text-sm md:text-lg text-gray-500">
              <li className="flex justify-between items-center">
                <span>Craft</span>
                <span>2</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Design</span>
                <span>3</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Handmade</span>
                <span>8</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Interior</span>
                <span>5</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Wood</span>
                <span>9</span>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h2 className="my-5 text-lg md:text-2xl font-medium text-black">
              Recent Posts
            </h2>
            {[post1, post2, post3, post4, post5].map((post, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 mb-4 border-b pb-2"
              >
                <Image
                  src={post}
                  alt={`Recent post ${idx + 1}`}
                  width={60}
                  height={60}
                  className="object-cover"
                />
                <div className="flex flex-col">
                  <h3 className="text-black text-sm md:text-base font-medium">
                    Recent Post Title {idx + 1}
                  </h3>
                  <span className="text-gray-500 text-xs">02-09-2021</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;