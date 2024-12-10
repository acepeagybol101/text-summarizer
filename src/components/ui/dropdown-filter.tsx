"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendar } from "react-icons/fa6";

const filters = [
  { id: 1, name: "Last 7 days" },
  { id: 2, name: "Last 30 days" },
  { id: 3, name: "Today" },
];

const DropdownFilter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(filters[0]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex gap-2 items-center justify-center w-full rounded-xl border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        >
          <FaCalendar className="text-gray-400" />
          {selectedFilter.name}
          <svg
            className="ml-2 -mr-1 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute left-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className="block px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 w-full"
              role="menuitem"
              onClick={() => {
                setSelectedFilter(filter);
                setIsOpen(false);
              }}
            >
              {filter.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownFilter;
