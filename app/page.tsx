import Map from '../components/Map/Map';

export default function Home() {
  return (
    <main>
      <div className="bg-cover h-72 relative" style={{ backgroundImage: "url('/pattern-bg-desktop.png')" }}>
        <h1 className="text-3xl mb-6 pt-10 font-rubik-medium text-white text-center">IP Address Tracker</h1>
        <div className="mt-2 flex justify-center">
          <input
            type="text"
            name="search-ip-address"
            id="search-ip-address"
            className="w-7/12 lg:w-3/12 p-2 text-lg leading-6 py-3 rounded-l-md"
            placeholder="Search for any IP address or domain"
          />
          <button
            type="button"
            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 font-semibold bg-black ring-1 ring-inset"
            aria-label="Search"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
          </button>
        </div>
        {/* need to work on the details container, the location and isp need to be on separate lines, doing that now will break the current layout :( */}
        <div className="flex flex-col lg:flex-row mt-4 lg:mt-20 p-4 lg:p-14 justify-center mx-auto items-center rounded-md bg-white w-8/12 border-black z-[500] relative text-center lg:text-left">
          <div className="lg:pr-4 lg:border-r">
            <p className="text-xs font-rubik-medium font- uppercase">IP Address</p>
            <p className="text-xl lg:text-3xl font-rubik-medium mb-4">192.212.174.191</p>
          </div>
          <div className="lg:px-4 lg:border-r">
            <p className="text-xs font-rubik-medium font- uppercase">Location</p>
            <p className="text-xl lg:text-3xl font-rubik-medium mb-4">Brooklyn, NY 10001</p>
            
          </div>
          <div className="lg:px-4 lg:border-r">
            <p className="text-xs font-rubik-medium font- uppercase">Timezone</p>
            <p className="text-xl lg:text-3xl font-rubik-medium mb-4">UTC-05:00</p>
          </div>
          <div className="lg:pl-4">
            <p className="text-xs font-rubik-medium font- uppercase">ISP</p>
            <p className="text-xl lg:text-3xl font-rubik-medium mb-4">SpaceX Starlink</p>
          </div>
        </div>
      </div>
      <Map />
    </main>
  )
}

{/* <h1 className="text-3xl mb-6 font-rubik-medium text-white">IP Address Tracker</h1>
<div className="mt-2 flex rounded-md shadow-sm">
    <input
      type="text"
      name="search-ip-address"
      id="search-ip-address"
      className="block  focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Search for any IP address or domain"
    />
  <button
    type="button"
    className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold bg-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    aria-label="Search"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" /></svg>
  </button>
</div> */}
