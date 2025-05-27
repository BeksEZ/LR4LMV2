/* ProductCard.tsx */

"use client";

import React from "react";
import Image from "next/image";
import Icon from "./info.png";
import AllergyModal from "./menu/AllergyModal";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  price: number;
  ingredients: string[];
  allergens: string[];
}

export const ProductCard: React.FC<ProductCardProps> = ({
                                                          imageSrc,
                                                          title,
                                                          price,
                                                          ingredients,
                                                          allergens,
                                                        }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
      <article className="px-2.5 pt-9 pb-2 mx-auto w-full text-2xl leading-10 text-black rounded-3xl border-2 border-black bg-stone-300">
        <div className="relative w-full h-48">
          <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover rounded-t-3xl"
              unoptimized
          />
        </div>
        <div className="flex gap-2 max-md:flex-col">
          <div className="w-3/5 max-md:w-full">
            <h3 className="pt-5 leading-8 break-words">{title}</h3>
          </div>
          <div className="w-2/5 max-md:w-full">
            <div className="flex flex-col items-center mt-5">
              <p className="text-1xl font-semibold text-center">
                {price}
                <br />
                грн
              </p>
              <button
                  aria-label="Show Allergy Info"
                  className="mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={handleOpenModal}
              >
                <Image
                    src={Icon}
                    alt="Info Icon"
                    width={50}
                    height={50}
                    className="object-contain"
                />
              </button>
            </div>
          </div>
        </div>

        {isModalOpen && (
            <AllergyModal
                title={title}
                ingredients={ingredients}
                allergens={allergens}
                onClose={handleCloseModal}
            />
        )}
      </article>
  );
};