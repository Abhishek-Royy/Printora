import React, { useState } from "react";

function Popularity() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Popularity");

  const options = [
    "Popularity",
    "New Arrival",
    "Price : High to Low",
    "Price : Low to High"
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none"
      >
        <span>Sort by: {selectedOption}</span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 w-48 p-2 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              className="flex items-center px-2 py-1 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="radio"
                name="sort"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionClick(option)}
                className="mr-2"
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Popularity;
