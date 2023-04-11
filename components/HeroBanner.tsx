import Link from "next/link";
import React from "react";
import { urlFor } from "@/lib/client";

const HeroBanner = ({ heroBanner }: any) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlFor(heroBanner.image).toString()}
          alt="headphones"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button className="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>DESCRIPTION</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
