import React from "react";
import RoundedRectangle from "./pill"; 

export default function CollectionList() {
  return (
    <div className="flex flex-col items-center">
      {/* Title Text */}
      <p className="text-black font-nunito text-[24px] font-bold mb-[10px]">
        My Collection
      </p>

      {/* Pills */}
      <div className="flex gap-[2px]">
        <RoundedRectangle text="Texas" />
        <RoundedRectangle text="Favorites" />
      </div>
    </div>
  );
}
