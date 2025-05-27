/* ProductGrid.tsx */

"use client";

import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductGrid: React.FC = () => {
  const products = [
    {
      imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/12f891bdea386802241a70a50d43b3792c819b443224b83315af3f97b0e13298?placeholderIfAbsent=true&apiKey=a1f33a58736f4f0399560d0a297c94bb",
      title: "МАНГО ЛАССІ",
      price: 69,
      ingredients: ["Манго", "Йогурт", "Молоко", "Цукор"],
      allergens: ["Молоко"],
    },
    {
      imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/a1872dc2d1f784e17683619563a23930b074cfb6e7d5608ea3dd141264824506?placeholderIfAbsent=true&apiKey=a1f33a58736f4f0399560d0a297c94bb",
      title: "ЧАЙ МАСАЛА",
      price: 69,
      ingredients: ["Чай", "Молоко", "Spices", "Цукор"],
      allergens: ["Молоко"],
    },
    {
      imageSrc:
          "https://cdn.builder.io/api/v1/image/assets/TEMP/da3429a472fb9ebb5d4cd046032055f6b8e02f12d16672fba4d6f71d598e7dd0?placeholderIfAbsent=true&apiKey=a1f33a58736f4f0399560d0a297c94bb",
      title: "ЛАССІ",
      price: 79,
      ingredients: ["Йогурт", "Вода", "Сіль"],
      allergens: ["Йогурт"],
    },
  ];

  return (
      <div className="grow max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {products.map((product, index) => (
              <div key={index} className="w-[33%] max-md:w-full">
                <ProductCard {...product} />
              </div>
          ))}
        </div>
      </div>
  );
};
