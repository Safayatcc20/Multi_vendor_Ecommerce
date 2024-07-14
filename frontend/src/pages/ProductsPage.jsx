import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { productData } from "../static/data";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (categoryData === null) {
      // Sort productData based on total_sell in descending order and set it to data
      const sortedData = productData.sort((a, b) => b.total_sell - a.total_sell);
      setData(sortedData);
    } else {
      // Filter productData based on category and set it to data
      const filteredData = productData.filter((product) => product.category === categoryData);
      setData(filteredData);
    }
    window.scrollTo(0, 0);
  }, [categoryData]);

  return (
    <div>
      <Header activeHeading={3} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
        </div>
        {data && data.length === 0 && (
          <h1 className="text-center w-full pb-[100px] text-[20px]">
            No products Found!
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
