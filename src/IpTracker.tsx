import { useState } from "react";
import { getLocation } from "./App";

function IpTracker() {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIp(e.target.value);
  };
  const handleSearch = async () => {
    const locationData = await getLocation(ip);
    if (locationData) {
      setLocation(locationData);

    }
  };

  return (
    <>
      <div>
        <div className="w-200  mx-auto my-5">
          <h1 className="text-2xl mb-5 font-bold font-mono text-white">
            IP Address Tracker
          </h1>
          <input
            type="text"
            name=""
            id="ip-address"
            placeholder="Enter IP adress here"
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
        <div className=" bg-white w-150 p-2 rounded-lg mx-auto my-5 ">
          {location && (
            <div className="flex justify-between">
              <div>
                <strong>IP Address</strong>:
                <span className="block"> {location.ip}</span>
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
      </div>
    </>
  );
}

export default IpTracker;
