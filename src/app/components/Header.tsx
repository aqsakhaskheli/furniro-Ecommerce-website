import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/Sheet";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
  return (
    <div className="w-screen bg-[#FFFFFF] flex justify-between items-center py-3 px-9 fixed top-0 z-50 shadow-md">
      {/* Logo Section */}
      <div className="flex justify-center items-center">
        <Image src={logo} alt="logo for our Furniture Website" />
        <h1 className="text-2xl montserrat-600">Furniro</h1>
      </div>

      {/* Navigation Links - Hidden on Small Screens */}
      <div className="hidden md:flex justify-between items-center gap-8 text-xl poppins-medium">
        <Link href="/">Home</Link>
        <Link href="/Shop">Shop</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
      </div>

      {/* Icons Section */}
      <div className="hidden md:flex justify-between items-center gap-8 text-xl font-normal">
        <Link href={"/"}>
          <VscAccount />
        </Link>
        <Link href={"/"}>
          <CiSearch />
        </Link>
        <Link href={"/"}>
          <IoHeartOutline />
        </Link>
        <Link href={"/Cart"}>
          <IoCartOutline />
        </Link>
      </div>

      {/* Hamburger Menu - Visible on Small Screens */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button>
              <AiOutlineMenu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4">
            <SheetHeader>
              <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4 text-lg poppins-medium">
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
              <Link href="/Shop" className="hover:text-gray-700">
                Shop
              </Link>
              <Link href="/About" className="hover:text-gray-700">
                About
              </Link>
              <Link href="/Contact" className="hover:text-gray-700">
                Contact
              </Link>
              <Link href="/Cart" className="hover:text-gray-700">
                Cart
              </Link>  
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header;