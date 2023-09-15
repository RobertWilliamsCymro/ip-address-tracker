"use client";
import Map from '../components/Map';
import useSWR from 'swr';
import { useState } from 'react';
import SearchForm from '@/components/SearchForm';

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const [ipAddress, setIpAddress] = useState("");

  const { data, error, } = useSWR(`https://ipwhois.app/json/${ipAddress}`, fetcher);

  const handleSubmit = (ipAddress: string) => {
    setIpAddress(ipAddress);
  };

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
    <div className="bg-no-repeat bg-cover h-72 relative bg-pattern-mobile sm:bg-pattern-desktop">
        <h1 className="text-3xl mb-6 pt-10 font-rubik-medium text-white text-center">IP Address Tracker</h1>
        <SearchForm onSubmit={handleSubmit} />
        <div className="flex flex-col lg:flex-row relative mt-4 lg:mt-8 p-4 lg:p-10 justify-between mx-auto items-center rounded-md bg-white w-8/12 border-black z-[500] text-center lg:text-left">
          <div className="lg:pr-4 lg:border-r">
            <p className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">IP Address</p>
             <p data-testid="ip" className="text-lg lg:text-2xl font-rubik-medium mb-4">{data.ip}</p>
          </div>
          <div className="lg:px-4 lg:border-r">
            <p className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">Location</p>
              <p data-testid="location" className="text-lg lg:text-2xl font-rubik-medium mb-4">{data.city}, {data.country}</p>
          </div>
          <div className="lg:px-4 lg:border-r">
            <p className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">Timezone</p>
             <p data-testid="timezone" className="text-lg lg:text-2xl font-rubik-medium mb-4">{data.timezone}</p>
          </div>
          <div className="lg:pl-4">
            <p className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">ISP</p>
             <p className="text-lg lg:text-2xl font-rubik-medium mb-4">{data.isp}</p>
          </div>
         </div>
      </div>

      <Map latitude={data.latitude} longitude={data.longitude} />
    </main>
  )
}