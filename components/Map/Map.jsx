import {
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";
import getDate from "../../utils/getDate";
import { getTime } from "../../utils/getDate";
import deviceIcon from "./deviceIcon";

import MapContainer from "./MapContainer";
import MapDownBar from "./mapDownBar";
// import MapSideBar from "./mapSideBar";
import RecenterAutomatically from "./RecenterMapAutomatically";

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent("click", (e) => {
    map.flyTo(e.latlng, map.getZoom(), {
      animate: animateRef.current,
    });
  });
  return null;
}

function Map({ continent, data }) {
  const [loadedMarkers, setLoadedMarkers] = useState([]);
  const [id, setId] = useState(3);
  const [remainingPositions, setRemainingPositions] = useState(
    data.slice(1000)
  );
  const [info, setInfo] = useState({
    country: "Nigeria",
    city: "Lagos",
    continent: "Africa",
    date: getDate(Date.now()),
    time: getTime(Date.now()),
  });
  const [country, setCountry] = useState("");
  const [geoDetails, setGeoDetails] = useState([
    data[id].latitude,
    data[id].longitude,
    13,
  ]);

  const animateRef = useRef(true);
  const mapRef = useRef();

  const Get_Country = async (country) => {
    const result = `/api/getCountry?e=${country}`;

    const { data } = await (await fetch(result)).json();
    const location = data[0];
    const { latitude, longitude } = location;

    setGeoDetails(() => [latitude, longitude, 25]);
  };

  const fetchLocation = async (lat, lng) => {
    const res = await fetch(`/api/location?location=${lat},${lng}`);

    const result = await res.json();
    setInfo({ ...result });
  };
  // Load the markers
  useEffect(() => {
    // Define a function to load the markers
    const loadMarkers = async () => {
      // Initialize an array of markers
      const markers = [];

      // Iterate over the data to create a marker for each device
      for (let i = 0; i < 1000; i++) {
        const position = data[i];
        if (position) {
          const marker = (
            // Add a marker component
            <Marker
              // Specify a key for the marker
              key={i}
              // Specify the icon for the marker
              icon={deviceIcon}
              // Specify the position for the marker
              position={[position.latitude + 0, position.longitude]}
              // Add a click event handler
              eventHandlers={{
                click: (e) => {
                  // Call the fetchLocation function to fetch the location for the device
                  fetchLocation(position.latitude, position.longitude);
                  // Set the id state variable
                  setId(position.id);
                },
              }}
            >
              {/* Add a popup to the marker */}
              <Popup>Device {position.id}</Popup>
            </Marker>
          );
          // Add the marker to the array of markers
          markers.push(marker);
        }
      }
      // Set the loadedMarkers state variable
      setLoadedMarkers(markers);
    };
    // Call the loadMarkers function
    loadMarkers();
    // Call the fetchLocation function
    fetchLocation(data[3].latitude, data[3].longitude);
  }, [data]);

  const handleMoveEnd = async () => {
    const map = mapRef.current;
    const bounds = map.getBounds();

    // Check if any remaining positions are visible on the map
    const visiblePositions = remainingPositions.filter((position) =>
      bounds.contains([position.latitude, position.longitude])
    );
    if (visiblePositions.length > 0) {
      // Load next chunk of positions
      const nextChunk = remainingPositions.slice(0, 1000);
      const nextMarkers = [];
      for (let i = 0; i < 1000; i++) {
        const position = nextChunk[i];
        const marker = (
          <Marker
            key={i + loadedMarkers.length}
            position={[position.latitude, position.longitude]}
            eventHandlers={{
              click: () => {
                fetchLocation(position.latitude, position.longitude);
                setId(position.id);
              },
            }}
          >
            <Popup>Device {position.id}</Popup>
          </Marker>
        );
        nextMarkers.push(marker);
      }
      setLoadedMarkers((prevMarkers) => [...prevMarkers, ...nextMarkers]);
      setRemainingPositions((prevPositions) => prevPositions.slice(1000));
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      Get_Country(country);
    }
  };

  return (
    <div className="w-full h-full  bg-white bg-opacity-80  ">
      <div className=" h-full flex justify-start relative ">
        <div className="w-full relative flex flex-col ">
          <div className="flex  justify-center py-2 z-20 left-1/2 transform -translate-x-1/2 absolute top-12">
            <input
              type="search"
              className="rounded-full flex  p-2 bg-transparent border-2 border-zinc-600"
              placeholder="search..."
              value={country}
              spellCheck="true"
              autoCorrect="on"
              onKeyUp={handleKeyPress}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="z-0 relative">
            {geoDetails[0] != "" && geoDetails[0] != "" && (
              <>
                <MapContainer
                  width="100%"
                  center={[geoDetails[0], geoDetails[1]]}
                  zoom={geoDetails[2]}
                  scrollWheelZoom={true}
                  onMoveend={handleMoveEnd}
                  zoomControl={false}
                  ref={mapRef}
                >
                  <ZoomControl position="topright" />
                  <TileLayer
                    id="mapbox/streets-v11"
                    accessToken="pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                    url="https://api.mapbox.com/styles/v1/callynnamani/cks6qgrvv9uah17o5njktvof4/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {loadedMarkers != null && loadedMarkers.length > 0
                    ? loadedMarkers
                    : "Loading..."}

                  <SetViewOnClick animateRef={animateRef} />
                  <RecenterAutomatically
                    lat={geoDetails[0]}
                    lng={geoDetails[1]}
                  />
                </MapContainer>
              </>
            )}
          </div>
          <div className=" ">
            <MapDownBar data={data[id]} info={info} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
