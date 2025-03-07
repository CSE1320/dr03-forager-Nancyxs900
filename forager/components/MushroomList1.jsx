import React from "react";

const mushrooms = [
  { name: "Death Cap", image: "Death_Cap.png" },
  { name: "Paddy Straw", image: "Paddy_straw.png" },
  { name: "Destroying Angel", image: "Destroying_Angel.png" },
  { name: "False Death Cap", image: "False_Death.png" },
  { name: "Puffball", image: "Puffball.png" },
];

export default function MushroomList1() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <ul className="grid grid-cols-3 gap-x-5 gap-y-6 w-[350px] list-none p-0">
        {mushrooms.map((mushroom, index) => (
          <li key={index} className="relative w-[103px] h-[165px] flex-shrink-0 text-[#203B5F] text-center font-nunito text-[16.4px] font-semibold">
            <div className="bg-white p-2 w-[103px] h-[165px] inline-block shadow-md relative">
              <img src={`/icons/${mushroom.image}`} alt={`${mushroom.name} mushroom`} width={96} height={106} />
              {["Death Cap", "Destroying Angel", "False Death Cap"].includes(mushroom.name) && (
                <div className="absolute top-[-10px] right-0 w-[20px] h-[20px]">
                  <img src="/icons/icon_warning.svg" alt="Warning icon" className="w-full h-auto" />
                </div>
              )}
            </div>
            <p className="absolute w-[97.576px] h-[22.518px] mt-[13px]">{mushroom.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
