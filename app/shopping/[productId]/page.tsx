"use client";
import { useParams } from "next/navigation";
import React from "react";
//
const Product = () => {
  const { productId } = useParams();

  return <div>product detail {productId}</div>;
};

export default Product;
