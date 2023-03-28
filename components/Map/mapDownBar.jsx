import MapContentCard from "./MapContentCard";

import { AiOutlineRollback } from "react-icons/ai";

import Link from "next/link";
import { useState, useEffect } from "react";
function MapDownBar({ data, info: { city, country, date, time } }) {
  const [mapContentCards, setMapContentCards] = useState([]);

  useEffect(() => {
    setMapContentCards(data.parameters);
  }, [data]);

  return (
    <div
      className={` bg-black w-full font-Grotesk ease-in-out transition-all p-2`}
    >
      <div className="mx-5 ">
        <div className="text-white py-5 mb-8 ">
          <div className="flex justify-center sm:justify-between items-center flex-wrap">
            <div className="col-span-3 grid grid-cols-1 gap-2 justify-between py-5">
              <div className="flex gap-4">
                <p className="font-bold text-xl">
                  {city}, {country}
                </p>
                <p className="text-md self-center">
                  Local: {time}: {date}
                </p>
              </div>
              <p className="pr-1 text-base">
                120-200: Some members of the general public may experience
                health effects within 24 hours of exposture; members of
                sensitive group may experience more serious health effects.
              </p>
            </div>
            <div className="">
              <Link
                href="/"
                className="bg-white flex items-center gap-x-4 text-primary px-4 py-2 rounded-sm self-center"
              >
                <AiOutlineRollback />
                Go back home
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-stretch justify-center flex-wrap gap-4 mb-4 ">
          {mapContentCards.map((item, index) => {
            return (
              <MapContentCard
                key={index}
                value={item.value}
                alert={"Normal"}
                changes={"0.025"}
                direction={"down"}
                parameter={item.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MapDownBar;
