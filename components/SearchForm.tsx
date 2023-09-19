import React, { useState } from "react";

interface SearchFormProps {
  onSubmit: (ipAddress: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
  const [ipAddress, setIpAddress] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(ipAddress);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpAddress(e.target.value);
  };

  return (
    <form className="flex justify-center max-w-sm lg:max-w-4xl mx-auto p-8" onSubmit={handleSubmit}>
      <label htmlFor="search-ip-address" className="sr-only">
        Search IP Address
      </label>
      <input
        type="text"
        name="search-ip-address"
        id="search-ip-address"
        className="py-2 px-4 rounded-l-lg w-full"
        placeholder="Search for any IP address or domain"
        value={ipAddress}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="bg-black py-4 px-4 hover:opacity-80 rounded-r-lg"
        aria-label="Search"
        data-testid="Search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
      </button>
    </form>
  );
};

export default SearchForm;