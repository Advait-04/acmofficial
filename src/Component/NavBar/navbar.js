import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiOpencollective } from "react-icons/si";
import "./nav.css";
import Logo from "../../img/ACMam.png";
const Navbar = () => {
  const [closer, setCloser] = useState(false);

  const navbar_click = () => {
    setCloser(!closer);
  };
  return (
    <div className="flex overflow-hidden justify-between items-center h-[6rem]  mx-auto  px-4 text-black bg-slate-700 bg-color ">
      <h1 className="w-full text-[#00df9a] text-3xl font-bold  ml-[-5px]">
        <img src={Logo} alt="something" className=" h-[3.6rem] "></img>
      </h1>
      <ul className="hidden md:flex ">
        <li className="p-5 cursor-pointer">Home</li>
        <li className="p-5 cursor-pointer">Events</li>
        <li className=" p-5  w-[160px] cursor-pointer">why joining us ?</li>
        <li className="p-5 cursor-pointer">Clubs</li>
        <li className=" p-5 cursor-pointer">Blogs</li>
        <li className=" p-5 cursor-pointer">Sponsors</li>
      </ul>
      <div onClick={navbar_click} className="block md:hidden">
        {!closer ? (
          <SiOpencollective
            size={19}
            className=" ease-out duration-1000 hover:cursor-pointer"
          />
        ) : (
          <AiFillCloseCircle
            size={19}
            className="ease-in-out duration-1000 hover:cursor-pointer"
          />
        )}
      </div>
      <div
        className={
          closer
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[white] ease-in-out duration-1000 md:hidden overflow-hidden z-[1]"
            : "fixed left-[-100%] top-0  h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-[2s] md:hidden z-[1]"
        }
      >
        <h1 className="w-full text-[#00df9a] text-3xl font-bold pt-3 ml-3">
          <img src={Logo} alt="something" className=" h-[3.6rem] "></img>
        </h1>
        <ul className=" pt-14 uppercase m-5  uppercase">
          <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
            Home
          </li>
          <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
            Events
          </li>
          <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
            Why joining Us ?
          </li>
          <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
            Clubs
          </li>
          <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
            Blogs
          </li>
          <li className="p-4 border-b border-b-gray-60 hover:rounded-b-lg hover:bg-slate-400 ease-in duration-100 hover:text-[#000] hover:font-bold hover:cursor-pointer">
            Sponsors
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;