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
      <ul className="flex flex-wrap gap-x-5 gap-y-9 justify-between max-w-[364px] h-[380px] list-none p-0">
        {mushrooms.map((mushroom, index) => (
          <li
            key={index}
            className="relative w-[103px] h-[165px] flex-shrink-0 text-[#203B5F] text-center font-nunito text-[16.4px] font-semibold"
          >
            <div className="bg-white p-2 w-[103px] h-[165px] inline-block shadow-md relative">
              {/* Mushroom Image */}
              <img
                src={`/icons/${mushroom.image}`}
                alt={`${mushroom.name} mushroom`}
                width={96}
                height={106}
                className="mx-auto"
              />
              {/* Warning Icon for Toxic Mushrooms */}
              {["Death Cap", "Destroying Angel", "False Death Cap"].includes(mushroom.name) && (
                <div className="absolute top-[-10px] right-[-5px] w-[24px] h-[24px]">
                  <img src="/icons/icon_warning.svg" alt="Warning icon" className="w-full h-full" />
                </div>
              )}
            </div>
            {/* Mushroom Name */}
            <p className="mt-[10px]">{mushroom.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
