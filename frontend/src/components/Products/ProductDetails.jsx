import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleMessageSubmit = () => {
    navigate("/inbox?conversation=507ebaedj4");
  };

  if (!data) {
    return <p>Loading...</p>; // Render a loading message if data is not available
  }

  return (
    <div className="bg-white">
      <div className={`${styles.section} w-[90%] 800px:w-[80%]`}>
        <div className="w-full py-5">
          <div className="block w-full 800px:flex">
            <div className="w-full 800px:w-[50%]">
              <img
                src={data.image_Url && data.image_Url[selectedImageIndex]?.url}
                alt={data.name}
                className="w-[80%]"
              />

              <div className="w-full flex">
                {data.image_Url &&
                  data.image_Url.map((image, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer ${
                        selectedImageIndex === index ? "border" : ""
                      }`}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img
                        src={image.url}
                        alt={data.name}
                        className="h-[200px] overflow-hidden mr-3 mt-3"
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full 800px:w-[50%] pt-5">
              <h1 className={styles.productTitle}>{data.name}</h1>
              <p>{data.description}</p>
              <div className="flex pt-3">
                <h4 className={styles.productDiscountPrice}>
                  {data.discountPrice}$
                </h4>
                <h3 className={styles.price}>
                  {data.originalPrice ? `${data.originalPrice}$` : null}
                </h3>
              </div>

              <div className="flex items-center mt-12 justify-between pr-3">
                <div>
                  <button
                    className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={decrementCount}
                  >
                    -
                  </button>
                  <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px]">
                    {count}
                  </span>
                  <button
                    className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>
                <div>
                  {isFavorite ? (
                    <AiFillHeart
                      size={30}
                      className="cursor-pointer"
                      onClick={() => setIsFavorite(false)}
                      color="red"
                      title="Remove from wishlist"
                    />
                  ) : (
                    <AiOutlineHeart
                      size={30}
                      className="cursor-pointer"
                      onClick={() => setIsFavorite(true)}
                      color="#333"
                      title="Add to wishlist"
                    />
                  )}
                </div>
              </div>
              <div
                className={`${styles.button} !mt-6 !rounded !h-11 flex items-center`}
                // onClick={() => addToCartHandler(data._id)}
              >
                <span className="text-white flex items-center">
                  Add to cart <AiOutlineShoppingCart className="ml-1" />
                </span>
              </div>
              <div className="flex items-center pt-8">
                <Link to={`/shop/preview/${data.shop._id}`}>
                  <img
                    src={data.shop.shop_avatar.url}
                    alt={data.shop.name}
                    className="w-[50px] h-[50px] rounded-full mr-2"
                  />
                </Link>
                <div className="pr-8">
                  <Link to={`/shop/preview/${data.shop._id}`}>
                    <h3 className={`${styles.shop_name} pb-1 pt-1`}>
                      {data.shop.name}
                    </h3>
                  </Link>
                  <h5 className="pb-3 text-[15px]">
                    ({data.shop.ratings}) Ratings
                  </h5>
                </div>
                <div
                  className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11`}
                  onClick={handleMessageSubmit}
                >
                  <span className="text-white flex items-center">
                    Send Message <AiOutlineMessage className="ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ProductDetails;
