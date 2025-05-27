import * as React from "react";
import Image from "next/image"; // <-- Import the Next.js Image component
import icon from "@/components/info.png"

export const MenuSideBar: React.FC = () => {
  return (
      // Remove the fixed width from here, let the parent control it.
      // Original: <aside className="w-[20%] max-md:ml-0 max-md:w-full">
      <aside className="w-full"> {/* Ensure it takes the full width of its parent container */}
        <div className="text-white max-md:mt-10">
          <div className="bg-blue-600 flex flex-col items-start py-8 pr-14 pl-7 mt-2.5 text-4xl font-bold bg-amber-50 rounded-[30px] max-md:px-5">
            <Image
                src={icon}
                alt="Allergen information icon"
                className="object-contain aspect-[1.02] w-[120px] filter invert" // This width is for the image, which is fine.
            />
            <p className="mt-2.5">
              Цей символ
              дозволяє переглянути
              інгредієнти-алергени у страві.
            </p>
          </div>
        </div>
      </aside>
  );
};

export default MenuSideBar;