import React from 'react';

export function TitleSection() {
  return (
    <div className="absolute contents font-['Montserrat:SemiBold',_sans-serif] font-semibold leading-[0] left-1/2 text-left top-[129px] translate-x-[-50%] uppercase">
      {/* Main white title */}
      <div className="absolute flex flex-col h-[189.231px] justify-center left-[136px] text-[#ffffff] text-[113.293px] top-[226.385px] translate-y-[-50%] w-[804px]">
        <p className="block leading-[141.616px]">vOLuNTEERS</p>
      </div>
      
      {/* Layered titles with decreasing opacity */}
      <div
        className="absolute flex flex-col h-[189.231px] justify-center opacity-50 text-[113.293px] top-[320.615px] translate-y-[-50%] w-[804px]"
        style={{ left: "calc(50% - 402px)" }}
      >
        <p className="block leading-[141.616px]">vOLuNTEERS</p>
      </div>
      
      <div
        className="absolute flex flex-col h-[189.231px] justify-center opacity-20 text-[113.293px] top-[414.846px] translate-y-[-50%] w-[804px]"
        style={{ left: "calc(50% - 400px)" }}
      >
        <p className="block leading-[141.616px]">vOLuNTEERS</p>
      </div>
      
      <div
        className="absolute flex flex-col h-[189.231px] justify-center opacity-5 text-[113.293px] top-[508.615px] translate-y-[-50%] w-[804px]"
        style={{ left: "calc(50% - 401px)" }}
      >
        <p className="block leading-[141.616px]">vOLuNTEERS</p>
      </div>

      {/* "MEET OUR" text */}
      <div
        className="absolute flex flex-col justify-center text-[#ffffff] text-[44.08px] text-nowrap top-[157px] translate-y-[-50%]"
        style={{ left: "calc(50% - 124px)" }}
      >
        <p className="block leading-[55.1px] whitespace-pre">MEET OUR</p>
      </div>
    </div>
  );
}