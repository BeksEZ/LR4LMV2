"use client";

import { ProductCard } from "../ProductCard";

export const ProductGrid2 = () => {
  const originalProducts = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/12f891bdea386802241a70a50d43b3792c819b443224b83315af3f97b0e13298?placeholderIfAbsent=true&apiKey=a1f33a58736f4f0399560d0a297c94bb",
      title: "МАНГО ЛАССІ",
      price: 69,
      allergyIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1a9b99aad6ba8113eab59f893914c378c0266dffa8492f4628eada697bf02d84?placeholderIfAbsent=true&apiKey=a1f33a58736f4f0399560d0a297c94bb",
      ingredients: ["Манго", "Йогурт", "Молоко", "Цукор"],
      allergens: ["Молоко"],
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a1872dc2d1f784e17683619563a23930b074cfb6e7d5608ea3dd141264824506?placeholderIfAbsent=true&apiKey=a1f33a58736f4f0399560d0a297c94bb",
      title: "ЧАЙ МАСАЛА",
      price: 69,
      allergyIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1a9b99aad6ba8113eab59f893914c378c0266dffa8492f4628eada697bf02d84?placeholderIfAbsent=true&apiKey=a1f33a58736f4f0399560d0a297c94bb",
      ingredients: ["Чай", "Молоко", "Spices", "Цукор"],
      allergens: ["Молоко"],
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/da3429a472fb9ebb5d4cd046032055f6b8e02f12d16672fba4d6f71d598e7dd0?placeholderIfAbsent=true&apiKey=a1f33a58736f4f0399560d0a297c94bb",
      title: "ЛАССІ",
      price: 79,
      allergyIcon:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1a9b99aad6ba8113eab59f893914c378c0266dffa8492f4628eada697bf02d84?placeholderIfAbsent=true&apiKey=a1f33a58736f4f0399560d0a297c94bb",
      ingredients: ["Йогурт", "Вода", "Сіль"],
      allergens: ["Йогурт"],
    },
  ];

  // Create an array of 12 items by repeating the original products.
  const products = Array.from({ length: 12 }, (_, i) => originalProducts[i % originalProducts.length]);

  return (
    <div className="grow max-md:mt-10 max-md:max-w-full">
      {/* Ensuring the container starts at the left */}
      <div className="flex flex-wrap gap-5 justify-start max-md:flex-col">
        {products.map((product, index) => (
          <div key={index} className="w-[20%] max-md:w-full">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

