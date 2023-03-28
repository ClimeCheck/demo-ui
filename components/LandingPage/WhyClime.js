import Image from "next/image";

import style from "../../styles/WhyClime.module.scss";

const WhyClime = () => {
  return (
    <div className={style.container} id="story">
      <div className={style.headerText}>
        <span>
          <h1>Why ClimeCheck?</h1>
          <svg
            width="40%"
            height="7"
            viewBox="0 0 503 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M502.667 3.5a2.667 2.667 0 1 0-5.334 0 2.667 2.667 0 0 0 5.334 0ZM500 3H0v1h500V3Z"
              fill="#179502"
            />
          </svg>
        </span>
        <p>
          ClimeCheck is a global climate commons built through the aggregation
          of individuals and data from the local, city, state, country,
          continent and all around the world. The Climecheck be all, end all is
          individual grassroot participation. The problem we are looking to
          solve is how to tackle the issue of climate change in a way that is
          trustless and reliable.
        </p>
      </div>
      <div className={style.reveal}>
        <iframe
          loading="lazy"
          className={style.video}
          src="https://www.youtube.com/embed/wjRiBeWAYlk"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WhyClime;
