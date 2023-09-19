"use client";
import Map from '../components/Map';
import useSWR from 'swr';
import { useState } from 'react';
import SearchForm from '@/components/SearchForm';

export default function Home() {

  const fetcher = (url: string) => fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error("Bad request");
    }
    return res.json();
  });

  const [ipAddress, setIpAddress] = useState("");
  const checkIpAddress = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
  const checkDomain = /^[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

  let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.NEXT_PUBLIC_IPIFY_API_KEY}`;

    // use .test() method from regex to check if input is an IP address or domain name
  if (checkIpAddress.test(ipAddress)) {
    url += `&ipAddress=${ipAddress}`;
  } else if (checkDomain.test(ipAddress)) {
    url += `&domain=${ipAddress}`;
  }
  
  const { data, error } = useSWR(url, fetcher);

  const handleSubmit = (ipAddress: string) => {
    if (ipAddress.includes('/')) {
      alert('Input cannot contain forward slashes');
      return;
    }
    setIpAddress(ipAddress);
  };

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <main>
      <div className="bg-no-repeat bg-cover h-72 relative bg-pattern-mobile sm:bg-pattern-desktop">
        <h1 className="text-3xl mb-6 pt-10 font-rubik-medium text-white text-center">IP Address Tracker</h1>
        <SearchForm onSubmit={handleSubmit} />
        <article className="bg-white rounded-lg shadow p-2 md:p-8 mx-10 md:mx-8 grid grid-cols gap-4 mt-4 md:grid-cols-2 lg:grid-cols-4 max-w-6xl xl:mx-auto text-center lg:text-left lg:mt-10 relative"
        style={{zIndex:10000}}>
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">IP Address</h2>
            <p  className="text-lg lg:text-2xl font-rubik-medium mb-4">{data.ip}</p>
          </div>
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">Location</h2>
            <p className="text-lg lg:text-2xl font-rubik-medium mb-4">{data.location.city}, {data.location.country}</p>
          </div>
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">Timezone</h2>
            <p className="text-lg lg:text-2xl font-rubik-medium mb-4">{data.location.timezone}</p>
          </div>
          <div className="">
            <h2 className="text-sm sm:text-md font-rubik-medium font- uppercase text-custom-100">ISP</h2>
            <p className="text-lg lg:text-2xl font-rubik-medium mb-4">{data.isp}</p>
          </div>
        </article>
      </div>

      <Map latitude={data.location.lat} longitude={data.location.lng} />
    </main>
  )
}