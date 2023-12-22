import React from "react";
import ProfileIcons from "../components/ProfileIcons";

const MainSec = () => {
  return (
    <div>
      <ProfileIcons />
      <div className="flex justify-between">
        <div>
          <div className="flex justify-between w-[900px]">
            <h1 className="font-roboto text-2xl font-[500] leading-8 ">
              Daily Task
            </h1>
            <div className="flex items-center gap-10">
              <div className="font-roboto text-sm font-normal">
                <span className="font-[600]">3/11</span> Task Completed
                <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
                  <div
                    className="h-full bg-[#FF0032] rounded-full"
                    style={{ width: `${60}%` }}
                  ></div>
                </div>
              </div>
              <div className="font-roboto text-base font-medium">View All</div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default MainSec;
