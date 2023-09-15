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
    <form className="mt-2 flex justify-center" onSubmit={handleSubmit}>
      <label htmlFor="search-ip-address" className="sr-only">
        Search IP Address
      </label>
      <input
        type="text"
        name="search-ip-address"
        id="search-ip-address"
        className="w-5/12 p-2 text-lg leading-6 py-6 rounded-l-md"
        placeholder="Search for any IP address or domain"
        value={ipAddress}
        onChange={handleInputChange}
      />
      <button
        type="submit"
        className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-xl px-5 lg:px-8 py-2 font-semibold bg-black ring-1 ring-inset"
        aria-label="Search"
        data-testid="Search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
      </button>
    </form>
  );
};

export default SearchForm;