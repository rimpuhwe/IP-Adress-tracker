import IpTracker from "./IpTracker";
import "./App.css";

const API_KEY = "60f288361458402fbb118f785afa57c7";
const API_URL = "https://api.ipgeolocation.io/ipgeo";

export const getLocation = async (ip: string) => {
  try {
    const response = await fetch(`${API_URL}?apiKey=${API_KEY}&ip=${ip}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
};

function App() {
  return (
    <>
      <div className='border border-solid border-transparent bg-[url("/pattern-bg-desktop.png")]'>
        <IpTracker />
      </div>
      <div className="border-3 border-solid border-red-500">
        <p>This is the main application component</p>
      </div>
    </>
  );
}

export default App;
