"use client";
import { Rating } from "@smastrom/react-rating";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
// import styles
import Link from "next/link";

// import plugins if you need

const ProductDetails = ({ params }) => {
  console.log(params?.id);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [params]);

  return (
    <main>
      <section className="container">
        <div className="card mt-16 lg:card-side bg-base-100 shadow-xl">
          <div className="flex-1">
            <Image src={product?.thumbnail} alt="product" width={100} height={100} className="w-full h-fit"></Image>
            <div className="flex overflow-x-scroll">
              {product?.images?.map((img, i) => (
                <Image
                  className="rounded-xl"
                  key={i}
                  src={img}
                  alt="img"
                  width={100}
                  height={100}
                ></Image>
              ))}
            </div>
          </div>
          <div className="card-body flex-1">
            <div>
              <h2 className="card-title">{product?.title}</h2>
              <p>{product?.description}</p>
              <p>Brand: ${product?.brand}</p>
              <p>category: ${product?.category}</p>
              <p>stock: ${product?.stock}</p>
              <p>stock: ${product?.stock}</p>
              <div className="flex items-center gap-3">
                <Rating
                  style={{ maxWidth: 100 }}
                  value={product?.rating}
                  readOnly
                />{" "}
                {product?.rating}
              </div>
            </div>
            <div className="card-actions flex-col md:flex-row mt-3 justify-between">
              <p className="text-2xl font-semibold">Price: ${product?.price}</p>
              <button className="btn bg-dark">Add To Card</button>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/" className="btn mt-12">
            Back To Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
