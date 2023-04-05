import { Approach } from "./TimelineData";
import ellipse from "../../assets/Ellipse.png";
import star from "../../assets/Star.png";
import Image from "next/image";

function Timeline() {
  return (
    <div className="bg-white py-12 mx-auto relative font-Grotesk container grid w-screen overflow-hidden">
      <div className="justify-center my-10 grid">
        <h1 className="font-bold text-center text-xl sm:text-2xl md:text-3xl text-primary">
          Our Approach
        </h1>
        <div className="flex flex-col items-center justify-center pt-20 mx-auto text-black">
          {Approach.map((data, key) => {
            return (
              <div className="grid sm:even:flex-row-reverse sm:flex" key={key}>
                <h1
                  className={`text-xl text-primary w-[300px] p-4 relative ${
                    data.id === 2
                      ? "pl-2"
                      : "sm:border-r-4 sm:border-r-[#0069B3] sm:pr-4"
                  }`}
                >
                  {data.title}
                </h1>
                <span className="rounded-full bg-[#00963F] -ml-4 sm:mx-[288px] flex p-[10px] absolute">
                  {" "}
                </span>
                <p
                  className={`pb-8 w-[300px] p-4 ${
                    data.id === 2
                      ? "sm:border-r-4 sm:border-r-[#0069B3] sm:pr-4"
                      : ""
                  }`}
                >
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Image
        className="absolute top-8 flex justify-self-start w-16 sm:w-24 h-auto"
        src={star}
        size={50}
        alt=""
      />
      <Image
        className="absolute flex justify-self-end self-end w-16 mb-8 sm:w-24 h-auto"
        src={ellipse}
        size={50}
        alt=""
      />
    </div>
  );
}

export default Timeline;
