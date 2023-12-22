import React from "react";

const MenuButtons = ({ title, className, svgIcon: SvgIcon }) => {
  return (
    <div
      className={`flex py-4 text-white items-center gap-4 pl-10  ${className} mb-2 `}
    >
      {/* {SvgIcon && <svgIcon className="w-[30px] h-[30px] flex-shrink-0" />} */}
      {SvgIcon ? (
        <SvgIcon className="w-[30px] h-[30px] flex-shrink-0 cursor-pointer" />
      ) : (
        <div className="w-[30px] h-[30px] flex-shrink-0">Icon Not Found</div>
      )}
      <div className="text-xl font-roboto font-[500] leading-7 cursor-pointer">
        {title}
      </div>
    </div>
  );
};

export default MenuButtons;
