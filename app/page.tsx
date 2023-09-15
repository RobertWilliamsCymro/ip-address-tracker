"use client";
import Map from '../components/Map';
import useSWR from 'swr';
import { useState } from 'react';

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const [ipAddress, setIpAddress] = useState("8.8.8.8");

  const { data, error, } = useSWR(`https://ipwhois.app/json/${ipAddress}`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const ipAddress = formData.get("search-ip-address") as string;
    setIpAddress(ipAddress);
  }
  return (
    <main>
    <div className="bg-no-repeat bg-cover h-72 relative bg-pattern-mobile sm:bg-pattern-desktop">
        <h1 className="text-3xl mb-6 pt-10 font-rubik-medium text-white text-center">IP Address Tracker</h1>
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
        <div className="flex flex-col lg:flex-row relative mt-4 lg:mt-8 p-4 lg:p-10 justify-between mx-auto items-center rounded-md bg-white w-8/12 border-black z-[500] text-center lg:text-left">
          <div className="lg:pr-4 lg:border-r">
            <p className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">IP Address</p>
             <p data-testid="ip" className="text-lg lg:text-3xl font-rubik-medium mb-4">{data.ip}</p>
          </div>
          <div className="lg:px-4 lg:border-r">
            <p className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">Location</p>
              <p data-testid="location" className="text-lg lg:text-3xl font-rubik-medium mb-4">{data.city}, {data.country}</p>
          </div>
          <div className="lg:px-4 lg:border-r">
            <p className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">Timezone</p>
             <p data-testid="timezone" className="text-lg lg:text-3xl font-rubik-medium mb-4">{data.timezone}</p>
          </div>
          <div className="lg:pl-4">
            <p className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">ISP</p>
             <p className="text-lg lg:text-3xl font-rubik-medium mb-4">{data.isp}</p>
          </div>
         </div>
      </div>

      <Map latitude={data.latitude} longitude={data.longitude} />
    </main>
  )
}