import { useState } from "react";
import { fetchIpLocation } from "./service";
import MapContainer from "./MapContainer";

interface Location {
  lat: number;
  lng: number;
  ip: string;
  country_name: string;
  city: string;
  time_zone: {
    current_time: string;
  };
}

function IpTracker() {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };

  const handleSearch = async () => {
    setError(null);
    try {
      const loc = await fetchIpLocation(ip);
      setLocation(loc);
    } catch (err) {
      setError("Unable to fetch location. Please check the IP address.");
    }
  };

  return (
    <div>
      <div className="w-200 mx-auto my-5">
        <h1 className="text-2xl mb-5 font-bold font-mono text-white">
          IP Address Tracker
        </h1>
        <input
          type="text"
          placeholder="Enter IP address here"
          className="w-80 border border-solid border-transparent p-2 outline-none bg-white focus:text-color text-base text-bold rounded-md"
          onChange={handleInputChange}
        />
        <button
          className="bg-gray-700 text-white font-bold p-2 border border-solid border-transparent ml-5 rounded-md"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <div className="bg-white w-150 p-2 rounded-lg mx-auto my-5">
        {location && (
          <div className="flex justify-between">
            <div>
              <strong>IP Address:</strong>
              <span className="block">{location.ip}</span>
            </div>
            <div>
              <strong>Country:</strong>
              <span className="block">{location.country_name}</span>
            </div>
            <div>
              <strong>City:</strong>
              <span className="block">{location.city}</span>
            </div>
            <div>
              <strong>Time-zone:</strong>
              <span className="block">{location.time_zone.current_time}</span>
            </div>
          </div>
        )}
      </div>
      <div style={{ height: "400px", width: "100%" }}>
        {location && <MapContainer lat={location.lat} lng={location.lng} />}
      </div>
    </div>
  );
}

export default IpTracker;
