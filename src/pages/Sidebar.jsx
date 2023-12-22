import React from "react";
import MenuButtons from "../components/MenuButtons";
import { MdOutlineHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrTask } from "react-icons/gr";
import { TbUserDollar } from "react-icons/tb";
import { BsCalendar4Event } from "react-icons/bs";
import { LuAlarmPlus } from "react-icons/lu";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";

const SideBar = () => {
  return (
    <div className="h-[1082px] w-[270px] bg-[#263238]">
      <div className="ml-10 pt-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="35"
          viewBox="0 0 70 35"
          fill="none"
        >
          <path
            d="M0 34.9796H7.73361V8.79428H22.5032C22.5032 8.79428 27.0078 8.47592 29.3199 13.0524C29.3199 13.0524 30.8348 7.10297 33.1867 4.75505C33.1867 4.75505 29.5392 0.397461 23.9383 0.0393027C22.5231 0.0393027 0 0.0393027 0 0.0393027V34.9796Z"
            fill="#FF0032"
          />
          <path
            d="M11.1414 26.0856V34.96H23.2401C23.2401 34.96 28.6616 34.9003 33.226 30.1448C33.226 30.1448 30.1565 26.2647 29.3792 21.8076C29.3792 21.8076 27.1667 25.8469 23.5192 26.1055C22.8813 26.0856 11.1414 26.0856 11.1414 26.0856Z"
            fill="#FF0032"
          />
          <path
            d="M57.9814 34.9801V26.1853H45.3445C44.6868 26.1853 43.9094 25.7874 43.3314 25.4889C41.8365 24.693 40.6605 23.4196 39.943 21.9073C39.1457 20.216 38.8666 18.3457 38.8866 16.4952C38.8866 15.1421 39.2653 13.8687 40.0028 12.7345C41.1588 10.9636 43.1122 9.45139 45.1651 8.87436C45.4243 8.79477 45.7033 8.73507 46.0023 8.73507H69.243V0H45.2847C45.2847 0 32.7077 1.27345 31.2327 16.1171C31.0134 19.0023 31.2526 32.3735 45.1053 35L57.9814 34.9801Z"
            fill="#FF0032"
          />
          <path
            d="M49.1516 13.3308V21.8072H61.5891V18.6235H64.5789V21.9265H61.6489V34.9794H69.243C69.243 35.0988 69.243 13.3308 69.243 13.3308H49.1516ZM67.1103 18.0067H65.137V15.8976H67.1103V18.0067Z"
            fill="#FF0032"
          />
          <path
            d="M66.7714 16.2159H65.4759V17.6684H66.7714V16.2159Z"
            fill="white"
          />
        </svg>
      </div>

      <div>
        <MenuButtons
          title={"Home"}
          className="mt-14 bg-gradient-to-r from-[#FF0839] to-black"
          svgIcon={MdOutlineHome}
        />
        <MenuButtons title={"Profile"} svgIcon={CgProfile} />
        <MenuButtons title={"Task"} svgIcon={GrTask} />
        <MenuButtons title={"Salary"} svgIcon={TbUserDollar} />
        <MenuButtons title={"Event"} svgIcon={BsCalendar4Event} />
        <MenuButtons title={"Time Off"} svgIcon={LuAlarmPlus} />
        <MenuButtons title={"Rewards"} svgIcon={FaHandHoldingDollar} />
        <MenuButtons title={"Benefits"} svgIcon={BsGraphUpArrow} />
        <MenuButtons title={"Team"} svgIcon={FaUsers} />
      </div>
      <div className="flex justify-center items-center rounded-full bg-[#FF0032] mx-6 mt-[90px] mb-[72px]">
        <CiLogout className="text-white w-6 h-6 ml-12 " />
        <button className=" flex-shrink-0 leading-7 font-roboto font-[400] text-white text-xl ml-6 pr-12 py-5">
          Log out
        </button>
      </div>
    </div>
  );
};

export default SideBar;
