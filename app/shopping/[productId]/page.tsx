"use client";
import { useParams } from "next/navigation";

const Product = () => {
  const { productId } = useParams();

  return <div>product detail {productId}</div>;
};

export default Product;
