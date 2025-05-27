"use client";

import React from "react";

interface AllergyModalProps {
    title: string; 
    ingredients: string[];
    allergens: string[];
    onClose: () => void;
  }
  
  const AllergyModal: React.FC<AllergyModalProps> = ({ title, ingredients, allergens, onClose }) => {
    const [animate, setAnimate] = React.useState(false);
  
    React.useEffect(() => {
      setAnimate(true);
    }, []);
  
    return (
      <div
        className="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-md z-50"
        onClick={onClose}
      >
        <div
          className={`bg-white p-6 rounded-lg transition-all duration-300 transform ${
            animate ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-bold mb-2">{title}</h2> {/* Dish Title Here */}
          <h3 className="text-lg font-bold mb-2">Інгредієнти</h3>
          <ul>
            {ingredients.map((ingredient, index) => {
              const isAllergen = allergens.includes(ingredient);
              return (
                <li
                  key={index}
                  className={`text-lg ${isAllergen ? "text-red-500 opacity-100" : ""}`}
                >
                  {ingredient}
                </li>
              );
            })}
          </ul>
          {allergens.length > 0 && (
            <>
              <h3 className="text-lg font-bold mt-4">Алергени 🛑</h3>
              <ul>
                {allergens.map((allergen, index) => (
                  <li key={index} className="text-lg text-red-500 opacity-100">
                     {allergen}
                  </li>
                ))}
              </ul>
            </>
          )}
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Закрити
          </button>
        </div>
      </div>
    );
  };
  
export default AllergyModal;
