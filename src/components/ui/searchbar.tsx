"use client";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="relative w-[400px]">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <CiSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        onChange={handleInputChange}
        type="search"
        id="default-search"
        className="block w-full px-4 py-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search "
        required
      />
    </div>
  );
};

export default SearchBar;
