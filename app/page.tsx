import Map from '../components/Map/Map';

export default function Home() {
  return (
    <main>
      <div className="bg-cover h-96" style={{ backgroundImage: "url('/pattern-bg-desktop.png')" }}>
        <h1 className="text-3xl mb-6 font-rubik-medium text-white text-center">IP Address Tracker</h1>
        <div className="mt-2 flex justify-center">
          <input
            type="text"
            name="search-ip-address"
            id="search-ip-address"
            className="w-3/12 p-2 text-lg leading-6 py-3 rounded-l-md"
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
