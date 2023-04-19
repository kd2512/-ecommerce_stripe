import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

const FooterBanner = ({ footerBanner }: any) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h4>{footerBanner.largeText2}</h4>
          <p>{footerBanner.saleTime}</p>
        </div>
        <div className="right">
          <p>{footerBanner.smallText}</p>
          <p>{footerBanner.midText}</p>
          <p>{footerBanner.desc}</p>
          <Link href={`/product/${footerBanner.product}`}>
            <button type="button">{footerBanner.buttonText}</button>
          </Link>
        </div>
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={urlFor(footerBanner.image && footerBanner.image).toString()}
          alt="footer image"
          className="footer-banner-image"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
