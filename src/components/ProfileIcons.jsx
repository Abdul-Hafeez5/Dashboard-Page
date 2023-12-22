import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";


const ProfileIcons = () => {
  return (
    <div className="flex items-center justify-between my-10 ">
    <div className=" font-roboto text-3xl font-semibold leading-10 ">
      Dashboard
    </div>
    <div className="flex ">
      <div className="flex gap-6 ">
        <IoMdNotificationsOutline className="w-8 h-8" />
        <IoSettingsOutline className="w-8 h-8" />
        <FaQuestion className="w-8 h-8" />
      </div>
      <div className=" ml-12 flex gap-5 items-center">
        <img
          className="w-9 h-9 rounded-full bg-black "
          src="https://w7.pngwing.com/pngs/413/777/png-transparent-man-standing-while-wearing-blue-dress-shirt-man-man-people-candle-canon-thumbnail.png"
          alt=""
        />
        <div className="flex gap-[10px] items-center">
          <h1 className="text-[#FF0032] font-roboto text-xl font-[500] leading-5 ">
            Greeg
          </h1>
          <BiChevronDown className="w-5 h-4 text-[#FF0032] cursor-pointer" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProfileIcons
