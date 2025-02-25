import React from "react";
import RoundedRectangle from "./pill";
import { filterData } from "../data/development"; // Ensure this path is correct

export default function PillList() {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      {filterData.map((section, index) => (
        <div
          key={index}
          className={`w-[350px] ${index === 0 ? "h-[49px]" : "h-[115px]"} flex flex-col items-center`}
        >
          <p className="text-black font-nunito text-[24px] font-bold mb-[5px]">{section.title}</p>
          <div className="flex flex-wrap gap-[5px] justify-center">
            {section.pills.map((pill, idx) => (
              <RoundedRectangle key={idx} text={pill} isGreen={idx === 0} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}