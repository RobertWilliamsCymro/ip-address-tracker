import dynamic from "next/dynamic";

// disable server-side rendering for this component
// because next.js was complaining about window not being defined which is only available in the browser
// this is a hacky solution but it works
// The map compnent is being imported here and then exported with ssr disabled
const Map = dynamic(() => import("./Map"), { ssr: false });

export default Map;