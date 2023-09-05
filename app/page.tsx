import Map from '../components/Map/Map';
export default function Home() {

  return (
    <main className="flex flex-col w-[375px] my-auto mx-auto font-dm-sans justify-center">
      <div className="relative">
        <picture>
          <source srcSet="/pattern-bg-desktop.png" media="(min-width: 90rem)" />
          <source srcSet="/pattern-bg-mobile.png" />
          <img src="/pattern-bg-desktop.png" alt="" />
        </picture>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="mb-6 text-white text-xl font-rubik-semibold">IP Address Tracker</h1>
          <div className="flex items-center justify-center">
            <label htmlFor="search-ip-address" className="sr-only">Please enter an IP Address</label>
            <input type="text" placeholder="Search for any IP address or domain" className="p-2 rounded-l-md border-l-2 border-y-1" id="search-ip-address" />
            <button type="submit" className="bg-black p-4 rounded-r-md h-full" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6"/></svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-md bg-white w-9/12 p-2 mt-4 mr-6 border-black absolute left-1/3 transform -translate-x-1/4 -translate-y-2/3 z-10">
          <p className="text-xs uppercase">IP Address</p>
          <p className="text-lg font-rubik-bold mb-4">192.212.174.191</p>
          <p className="text-xs uppercase">Location</p>
          <p className="text-lg font-rubik-bold mb-4">Brooklyn, NY 10001</p>
          <p className="text-xs uppercase">Timezone</p>
          <p className="text-lg font-rubik-bold mb-4">UTC-05:00</p>
          <p className="text-xs uppercase">ISP</p>
          <p className="text-lg font-rubik-bold mb-4">SpaceX Starlink</p>
        </div>
      </div>
      <Map />
    </main>
  )
}