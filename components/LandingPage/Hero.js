import { ArrowUp2, Diagram } from "iconsax-react";
import style from "../../styles/Hero.module.scss";
import Link from "next/link";

const Hero = (props) => {
  const { station, trend, value } = props.data;

  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1 className="break-words">
          Community sourced hyperlocalized stream of climate data.
        </h1>
        <h4 className="pt-8 px-4 text-white">
          Climecheck is a Decentralized Science (DeSci) ecosystem with a
          real-time big data Platform of climate monitoring devices around the
          world.
        </h4>
      </div>

      <div className={style.ctaWrapper}>
        <Link href="/map">View Climate</Link>
      </div>
      <div className={style.info}>
        <div>
          <h2>Carbon dioxide</h2>
          <div className={style.data}>
            <ArrowUp2 size="44" color="#008000" variant="Bold" />
            <span>
              {trend}
              <span className={style.supsub}>
                <sup>ppm</sup>
              </span>
            </span>
          </div>
        </div>

        <div>
          <h2>Global Temperarature</h2>
          <div className={style.data}>
            <ArrowUp2 size="44" color="#008000" variant="Bold" />
            <span>
              {station}
              <span className={style.supsub}>
                <sup> &#8451;</sup>
              </span>
            </span>
          </div>
        </div>

        <div>
          <h2>Sea Level</h2>
          <div className={style.data}>
            <ArrowUp2 size="44" color="#008000" variant="Bold" />
            <span>
              {Number(value).toFixed(2)}
              <span className={style.supsub}>
                <sup>inches</sup>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
