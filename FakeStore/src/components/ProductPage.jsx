import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Rating, Typography } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

function ProductPage() {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  //getting particular product item data     
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setProduct(result);
        } catch (error) {
          setError(error.message);
        }
      };
  
      fetchProduct();
    }, [id]);
  
    //if error is found 
    if (error) {
      return <h1>Error in loading page: {error}</h1>;
    }
  
    //showing while data is loading
    if (!product.id) {
      return <h1>Loading...</h1>;
    }

      //using redux to add item to cart 
      const dispatch = useDispatch();
      function addItems(product){
        console.log(product)
        dispatch(add(product));
      }
  


      //product details ui
  return !error && (
    <div>
       <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto object-contain rounded" src={`${product.image}`}></img>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.title}</h1>
        <div class="flex mb-4">
          <span class="flex items-center">
          <div className="flex items-center gap-2 font-bold text-blue-gray-500">
          <h2>{product.rating && product.rating.rate}</h2>
      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
      <Typography color="blue-gray" className="font-medium text-blue-gray-500">
        Based on {product.rating && product.rating.count} Reviews
      </Typography>
    </div>
            {/* <span class="text-gray-600 ml-3"> {product.rating.count} Reviews</span> */}
          </span>
          <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p class="leading-relaxed" >Category : {product.category}</p>
        <p class="leading-relaxed" className='border-b-2 border-gray-700 py-1'>Description  </p>
        <p class="leading-relaxed">{product.description}</p>
       
        <div class="flex">
          <span class="title-font font-medium text-2xl text-gray-900">${product.price}</span>
          <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={()=>addItems(product)}>Add To Cart </button>

        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ProductPage