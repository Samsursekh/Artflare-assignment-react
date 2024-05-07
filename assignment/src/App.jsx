import React from "react";
import "./nav.css";
import banner from "./images/Hero-3.png";
import l1 from "./images/Welcome -L-1.png";
import l2 from "./images/Welcome -L-2.png";
import welcome from "./images/Welcome.png";
import drowing from "./images/Project banner.png";

import s1 from "./images/S-1.png";
import s2 from "./images/S-2.png";
import s3 from "./images/S-3.png";
import s4 from "./images/S-4.png";
import s5 from "./images/S-5.png";
import s6 from "./images/S-6.png";
import s7 from "./images/S-7.png";
import s8 from "./images/S-8.png";

import p1 from "./images/P-1.png";
import p2 from "./images/P-2.png";
import p3 from "./images/P-3.png";
import p4 from "./images/P-4.png";

import logo from "./images/Logo.png";

import { FaPhone } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function App() {
  return (
    <>
      <div
        className="hero bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <nav className="flex items-center justify-between px-[4%] md:px-[10%]">
          <img src={logo} alt="logo" className="md:w-48 w-32 mt-3" />
          <div className="lg:flex space-x-4 -ml-52 sm:hidden md:hidden ">
            <h3 className="font-medium inline-block">HOME</h3>
            <h3 className="font-medium inline-block">ABOUT</h3>
            {/* <h3 className="font-medium inline-block">SERVICES</h3> */}
            <h3 className=" flex justify-evenly font-medium ">
              <span>SERVICES</span>
              <span>
                <RiArrowDropDownLine className="text-3xl -mt-1" />
              </span>
            </h3>
            <h3 className="font-medium inline-block">CONTACT</h3>
            <h3 className="font-medium inline-block">FAQ</h3>
            <h3 className="font-medium inline-block">BLOG</h3>
          </div>

          <div className="text-white items-center justify-between flex">
            <div className="border p-1 mr-1 rounded-full">
              <FaPhone />
            </div>
            <button className="text-white font-semibold"> +90232342442</button>
          </div>
        </nav>

        <div className=" px-4 lg:w-[33%] md:w-[60%] w-[90%] mx-[4%] mt-12 lg:mx-[10%] z-40">
          <h1 className="text-6xl font-geomanist text-gray-800 leading-tight ">
            May your <span className="font-bold">house</span> be your canves
          </h1>
          <div className="bg-pink-500 w-113 h-1 left-36 mt-4 absolute w-[113px] z-20" />

          <p className="mt-7 text-lg font-myriad-pro text-gray-600 leading-relaxed">
            The Best Interior Design Company in Kolkata
          </p>

          <button className=" bg-gradient-to-l to-pink-500 from-blue-700 font-geomanist text-white  rounded-sm shadow-xl w-44 h-12 z-20 my-4 text-[16px]">
            Book Consultation
          </button>
        </div>
      </div>
      {/* second section */}

      <div className=" absolute inset-0 flex items-end justify-center lg:-bottom-24 md:-bottom-48  -bottom-[500px] ">
        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 border-b-2 shadow-md rounded-sm bg-white h-[600px] md:h-[400px] lg:h-[200px]">
          {/* First child div */}
          <div className="border-r-2 p-4">
            <h4 class="A_Few_Words">Meet Artflare</h4>

            <h1 className="text-4xl font-geomanist text-gray-800 leading-tight ">
              Book <span className="font-bold">Free</span> Consultation
            </h1>
          </div>

          {/* Second child div */}
          <div className="p-4">
            <h3 className="mb-2 text-gray-400">|</h3>
            <hr className=" h-[3px] bg-pink-700" />
            <h3 className="my-2 text-gray-400">Enter Your Number</h3>
            <hr className=" h-[2px] bg-gray-400" />

            <div>
              <input type="checkbox" className=" text-red-500 h-3 w-3 mt-3" />
              <label className="ml-2 text-[12px]">
                I agree to the{" "}
                <span className="text-blue-700 font-semibold">
                  terms and conditions
                </span>
              </label>
            </div>
          </div>

          {/* Third child div */}
          <div className=" p-4">
            <h3 className="my-2 text-gray-400">Enter Your Email</h3>
            <hr className=" h-[2px] bg-gray-400" />
            <h3 className="my-2 text-gray-400">Enter Your Current City</h3>
            <hr className=" h-[1.6px] bg-gray-400" />
          </div>

          {/* Fourth child div */}
          <div className="p-4 mt-4">
            <button class="rounded-lg  bg-gradient-to-br from-yellow-400 to-green-500 shadow-lg w-48 h-24 text-white">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/*/***********  After CTA section Third section *******************/}

      <div className=" font-geomanist w-3/4 m-auto pt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-[400px] md:mt-[120px] lg:mt-0">
        {/* First child div */}
        <div className="p-4">
          <h4 class="A_Few_Words">A Few Words</h4>
          <div className="bg-pink-500 h-1 lg:left-[196px] md:left-[100px] left-[50px] mt-2 absolute w-[70px] z-20" />
          <h1 className="text-4xl font-geomanist text-gray-800 leading-tight mt-6 pr-3">
            Welcome to <span className="font-bold">Artflare</span>
          </h1>
        </div>

        {/* Second child div */}
        <div className=" p-4">
          <img src={l1} alt="" className="w-full" />
        </div>

        {/* Third child div */}
        <div className="p-6">
          <h3 className="text-3xl">
            Why Your <span className="font-bold">Space</span> Needs{" "}
            <span className="font-bold">Colors</span>
          </h3>
          <h4 className="text-[18px] my-2 font-semibold">
            Colors have the power to shift the mood, tone, and emotion of your
            surrounds
          </h4>
          <p>
            The right color can turn a dull room into the most happening s Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum et
            dicta aliquam iste quam, dolore deserunt alias.
            <br /> Vel saepe quam fugit necessitatibus eum natus rem suscipit
            nostrum earum laborum. Cum!
          </p>
        </div>

        {/* Fourth child div */}
        <div className=" -rotate-6">
          <img src={welcome} alt="" className=" w-[200px] h-auto" />
        </div>
        <div className="p-6">
          <h3 className="text-3xl">
            Why Your <span className="font-bold">Space</span> Needs{" "}
            <span className="font-bold">Colors</span>
          </h3>
          <h4 className="text-[18px] my-2 font-semibold">
            Colors have the power to shift the mood, tone, and emotion of your
            surrounds
          </h4>
          <p>
            The right color can turn a dull room into the most happening s Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum et
            dicta aliquam iste quam, dolore deserunt alias.
            <br /> Vel saepe quam fugit necessitatibus eum natus rem suscipit
            nostrum earum laborum. Cum!
          </p>
        </div>

        {/* Fourth child div */}
        <div className="p-4">
          <img src={l2} alt="" />
        </div>
      </div>

      {/*/***********  Fourth section *******************/}

      <div
        className="hero bg-cover bg-center h-[80vh]"
        style={{ backgroundImage: `url(${drowing})` }}
      >
        <div className=" px-4 lg:w-[26%] md:w-[60%] w-[90%] mx-[4%] mt-12 lg:mx-[10%] pt-6">
          <h4 class="A_Few_Words">Contact Us</h4>
          <div className="bg-pink-500 h-1 lg:left-[160px] md:left-[55px] left-[20px] mt-2 absolute w-[70px] z-20" />
          <h2 className="text-4xl font-geomanist text-white leading-tight mt-6">
            Please <span className="font-bold">Call Us</span> to get an ultimate{" "}
            <span className="font-bold">Home Solution</span>
          </h2>

          <div className="items-center mt-6 justify-center flex rounded-lg  bg-gradient-to-r from-yellow-600 to-green-500 shadow-lg w-[90%] h-14 text-white">
            <div className="border p-2 mr-2 rounded-full">
              <FaPhone />
            </div>
            <button className="text-white font-semibold text-[13px]">
              CALL US AT +90232342442
            </button>
          </div>
        </div>
      </div>

      {/*/***********  Fifth section *******************/}

      <div className=" font-geomanist lg:w-3/4 w-[96%] md:w-[96%] pt-20 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 pb-20">
        {/* First child div */}
        <div className="p-4 border px-6">
          <h4 class="A_Few_Words">Our Service</h4>
          <div className="bg-pink-500 h-1 -ml-4 mt-2  w-[70px]" />

          <h1 className="text-4xl font-geomanist text-gray-800 leading-tight mt-6 pr-4">
            Best <span className="font-bold">Indoor Home Painting</span>{" "}
            Services In <span className="font-bold">Kolkata</span>
          </h1>
          <p className="text-[12px] mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            molestias omnis odio? Minima maiores asperiores, iure quae pariatur,
            nostrum voluptates assumenda nam quis nihil odio impedit adipisci
            quidem possimus sapiente? Fugit tempore sapiente architecto omnis
            consequatur.
          </p>
        </div>

        <div className="relative group">
          <img src={s1} alt="" className="w-full" />
          <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
            <h4>Ceiling Painting</h4>
            <p className="">
              Being the leading house painters in Kolkata, we never miss out.
            </p>
          </div>
          <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
            <p className="text-white font-semibold pl-4">Ceiling Painting</p>
          </div>
        </div>

        {/* Third child div */}

        <div className="relative group">
          <img src={s2} alt="" className="w-full" />
          <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
            <h4>Ceiling Painting</h4>
            <p className="">
              Being the leading house painters in Kolkata, we never miss out.
            </p>
          </div>
          <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
            <p className="text-white font-semibold pl-4">Ceiling Painting</p>
            <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
          </div>
        </div>

        {/* Fourth child div */}

        <div className="relative group">
          <img src={s3} alt="" className="w-full" />
          <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
            <h4>Ceiling Painting</h4>
            <p className="">
              Being the leading house painters in Kolkata, we never miss out.
            </p>
          </div>
          <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
            <p className="text-white font-semibold pl-4">Ceiling Painting</p>
            <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
          </div>
        </div>

        <div className="relative group">
          <img src={s4} alt="" className="w-full" />
          <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
            <h4>Ceiling Painting</h4>
            <p className="">
              Being the leading house painters in Kolkata, we never miss out.
            </p>
          </div>
          <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
            <p className="text-white font-semibold pl-4">Ceiling Painting</p>
            <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
          </div>
        </div>
        {/* Fourth child div */}

        <div className="relative group">
          <img src={s5} alt="" className="w-full" />
          <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
            <h4>Ceiling Painting</h4>
            <p className="">
              Being the leading house painters in Kolkata, we never miss out.
            </p>
          </div>
          <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
            <p className="text-white font-semibold pl-4">Ceiling Painting</p>
            <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
          </div>
        </div>

        <div className="relative group">
          <img src={s6} alt="" className="w-full" />
          <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
            <h4>Ceiling Painting</h4>
            <p className="">
              Being the leading house painters in Kolkata, we never miss out.
            </p>
          </div>
          <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
            <p className="text-white font-semibold pl-4">Ceiling Painting</p>
            <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
          </div>
        </div>

        <div className="relative group">
          <img src={s7} alt="" className="w-full" />
          <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
            <h4>Ceiling Painting</h4>
            <p className="">
              Being the leading house painters in Kolkata, we never miss out.
            </p>
          </div>
          <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
            <p className="text-white font-semibold pl-4">Ceiling Painting</p>
            <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
          </div>
        </div>

        <div className="relative group">
          <img src={s8} alt="" className="w-full" />
          <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
            <h4>Ceiling Painting</h4>
            <p className="">
              Being the leading house painters in Kolkata, we never miss out.
            </p>
          </div>
          <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
            <p className="text-white font-semibold pl-4">Ceiling Painting</p>
            <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
          </div>
        </div>
      </div>

      {/*/***********  Sixth section *******************/}
      <div className="w-full bg-rose-100 py-5">
        <div className=" lg:w-3/4 md:w-[90%] w-[90%] m-auto pt-20">
          <h4 class="A_Few_Words">Our Projects</h4>
          <div className="bg-pink-500 h-1 -ml-4 mt-2  w-[70px]" />

          <div className="lg:flex md:flex grid justify-between items-center m-auto w-full">
            <div>
              <h2 className="text-4xl font-geomanist text-gray-800 leading-tight mt-6 pr-4">
                Projects We Have <span className="font-bold">Done</span>{" "}
              </h2>
              <p>
                Customised your home with luxury and love. Lorem ipsum dolor sit
                amet.
              </p>
            </div>
            <button className=" bg-gradient-to-l to-pink-500 from-blue-700 font-geomanist text-white  rounded-sm shadow-xl w-44 h-12 z-20 my-4 text-[13px] font-semibold">
              VIEW ALL PROJECTS
            </button>
          </div>
          <div className="flex justify-between items-center mt-4 w-[250px]">
            <h3>Indore Pinting</h3>
            <h3>Outdoor Pinting</h3>
          </div>
          <hr className="bg-gray-300 w-full h-[2px] mt-2" />
          <div className="bg-pink-500 h-1 -mt-[2.5px]  w-[100px]" />

          <div className="flex justify-between items-center w-full mt-5">
            <h2 className="text-3xl">Indoor Painting</h2>
            <button className="border-2 border-slate-300 px-4 py-3 flex justify-evenly items-center">
              <span>Interior Wall Painting</span>
              <span>
                <RiArrowDropDownLine className="text-3xl" />
              </span>
            </button>
          </div>
        </div>
        {/* Second part of the sixth section */}

        <div className=" font-geomanist lg:w-3/4 w-[96%] md:w-[96%] pt-20 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 pb-20">
          <div className="relative group">
            <img src={p1} alt="" className="w-full" />
            <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
              <h4>Ceiling Painting</h4>
              <p className="">
                Being the leading house painters in Kolkata, we never miss out.
              </p>
            </div>
            <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
              <p className="text-white font-semibold pl-4">Ceiling Painting</p>
              <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
            </div>
          </div>

          <div className="relative group">
            <img src={p2} alt="" className="w-full" />
            <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
              <h4>Ceiling Painting</h4>
              <p className="">
                Being the leading house painters in Kolkata, we never miss out.
              </p>
            </div>
            <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
              <p className="text-white font-semibold pl-4">Ceiling Painting</p>
              <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
            </div>
          </div>

          <div className="relative group">
            <img src={p3} alt="" className="w-full" />
            <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
              <h4>Ceiling Painting</h4>
              <p className="">
                Being the leading house painters in Kolkata, we never miss out.
              </p>
            </div>
            <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
              <p className="text-white font-semibold pl-4">Ceiling Painting</p>
              <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
            </div>
          </div>

          <div className="relative group">
            <img src={p4} alt="" className="w-full" />
            <div className=" absolute inset-0 p-6 text-left bg-gradient-to-tl from-blue-700/90 transition-all  to-pink-500 text-white font-semibold opacity-0 group-hover:opacity-100 duration-700">
              <h4>Ceiling Painting</h4>
              <p className="">
                Being the leading house painters in Kolkata, we never miss out.
              </p>
            </div>
            <div className="absolute bottom-0 bg-black/10 w-full h-16 flex justify-between items-center">
              <p className="text-white font-semibold pl-4">Ceiling Painting</p>
              <MdOutlineArrowOutward className="text-white text-2xl mr-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
