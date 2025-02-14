import React, { useState } from 'react';

import styles from "../../../styles/styles";
import { Link } from 'react-router-dom';
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard" 
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar, AiFillDownSquare } from 'react-icons/ai';
import {MdThumbDown, MdThumbDownOffAlt} from 'react-icons/md'

const ProductCard = ({data}) => {
  const [click , setClick] = useState(false);
  const [open , setopen] = useState(false);
  const { name, image_Url, shop } = data;
  const d =  data.name;
  const product_name =  d.replace(/\s+/g , "-");
  return (
    <>
      <div className='w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer'>
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img src = {data.image_Url[0].url} alt={name} className=' w-full  h-[170px] object-contain'></img>
        </Link>
        <Link to = "/">
          <h5 className={`${styles.shop_name}`}>{data.shop.name}</h5>
        </Link>
        <Link to = {`/product/${product_name}`}>
          <h4 className="pb-3 font-[500]">
            {data.name.length > 40 ? data.name.slice(0 , 40) +"..." : data.name}
          </h4>
          <div className="flex">
            <AiFillStar className='mr-2 cursor-pointer' size = {20} color='#f6ba00'/>
            <AiFillStar className='mr-2 cursor-pointer' color='#f6ba00' size = {20}/>
            <AiFillStar className='mr-2 cursor-pointer' color='#f6ba00' size = {20}/>
            <AiFillStar className='mr-2 cursor-pointer' color='#f6ba00' size = {20}/>
            <AiOutlineStar className='mr-2 cursor-pointer' color='#f6ba00' size = {20}/>
          </div>
          <div className="py-2 flex items-center justyfy-between">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice}`}>
                {
                  data.price === 0  ? data.price : data.discount_price  
                }
                $
              </h5>
              <h4 className={`${styles.price}`}>
                {data.price ? data.price + " $" : null}
              </h4>
            </div>

            <span className='font-[400] text-[17px]  text-[#68d284]'>
                {data.total_sell} sold

            </span>
          </div>
        </Link>
          <div>
            {click ? (
              <MdThumbDown
              
              size={22}
              className='cursor-pointer absolute right-2 top-5'
              onClick={() => setClick(!click)}
              color="red"
              title="Dislike"
            />
          ) : (
            <MdThumbDownOffAlt
              size={22}
              className='cursor-pointer absolute right-2 top-5'
              onClick={() => setClick(!click)}
              color="#333"
              title="Dislike"
            />
          )}
            {/* <AiOutlineEye
              size = {22}
              className='cursor-pointer absolute right-2 top-14'
              onClick={() => setopen(!open)}
              color = "#333"
              title = "Quick View"
              />
              <AiOutlineShoppingCart
              size = {22}
              className='cursor-pointer absolute right-2 top-24'
              onClick={() => setClick(!click)}
              color =  "#444"
              title = "Add to cart"
              />

            <AiFillDownSquare
              size={22}
              className='cursor-pointer absolute right-2 top-5'
              onClick={() => setClick(!click)}
              color="red"
              title="Dislike"
            /> */}
        
          
              {
                open ?(
                <ProductDetailsCard setopen = {setopen} data = {data}/>
                ):null
              }
          </div>
      </div>
    </>
  )
}

export default ProductCard;
