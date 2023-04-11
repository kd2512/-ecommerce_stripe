import React from "react";
import Link from "next/link";
import { urlFor } from "@/lib/client";

const Product = ({ product: { image, name, slug, price } }: any) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          {/*  eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={urlFor(image && image[0]).toString()}
            height={250}
            width={250}
            className="product-image"
            alt="product"
          />
          <p className="product-name">{name}</p>
          <p className="product-price"> ₹ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
