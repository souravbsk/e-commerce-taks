'use client'
import CategoryNav from "@/components/CategoryNav";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaBars,
  FaCar,
  FaCartArrowDown,
  FaClock,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaMap,
  FaMapMarked,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import {GrFormClose} from "react-icons/gr"
const Header = () => {
  const [isNavShow,setNavShow] = useState(false)
  console.log(isNavShow);

  const handleNavToggle = () => {
    setNavShow(!isNavShow)
  }
  return (
    <header>
      <div className=" py-5 hidden md:block border-b ">
        <div className="flex container mx-auto items-center justify-between">
          <div>
            <ul className="flex items-center gap-4">
              <li>
                <FaFacebook></FaFacebook>
              </li>
              <li>
                <FaTwitter></FaTwitter>
              </li>
              <li>
                <FaInstagram></FaInstagram>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-6">
              <li className="flex items-center gap-3">
                <FaMapMarked></FaMapMarked> Deliver to 424242
              </li>
              <li className="flex items-center gap-3">
                <FaCar></FaCar> Track your order
              </li>
              <li className="flex items-center gap-3">
                <FaClock></FaClock> All Offers
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container relative py-5 mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <button className="block md:hidden" onClick={handleNavToggle}>
              {
                isNavShow ? 
                <GrFormClose></GrFormClose>
                : 
                <FaBars></FaBars>
              }

              </button>
            <Link href="/">  <h2 className="font-bold text-lg">BaZar.com</h2></Link>
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <input
              className="border-2 py-2 px-2 rounded-xl w-full"
              type="text"
            />
          </div>
          <div className="flex-1">
            <ul className="flex justify-end items-center gap-5 ">
              <li>
                <Link href="/">
                  <FaHeart></FaHeart>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaCartArrowDown></FaCartArrowDown>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaUser></FaUser>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`border block md:hidden absolute z-40 backdrop-blur-2xl duration-300 top-16 h-screen  ${isNavShow ? "left-0" : "-left-96"}`}>
          <CategoryNav></CategoryNav>
        </div>
      </div>
    </header>
  );
};

export default Header;
