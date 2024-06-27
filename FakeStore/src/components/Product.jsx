import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {add } from '../store/cartSlice'
function Product() {
    const dispatch = useDispatch();
    const [products, setProduct] = useState([]);
    const [error, setError] = useState(null);

    //get data using fetch api 
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/`);
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
  }, []);

  if (error) {
    return <h1>Error in loading page: {error}</h1>;
  }

        
    //function to dispatch the item to add to cart by redux 
    
    function addToCart(item){
        dispatch(add(item))
    }

    return (
        <div>
            {/* list of all products from api */}
            <section className="text-gray-600 body-font">
                <div className="container px-5  mx-auto">
                    <div className="flex flex-wrap m-4">
                        {products.map((item) => (
                            <div key={item.id} className="lg:w-1/4 border-2 md:w-1/2 p-4 w-full flex flex-col justify-between">
                                <Link className="block relative h-48 rounded overflow-hidden" to={`/products/${item.id}`}>
                                {item.id}
                                    <img alt={`no image available`} className="hover:scale-110 hover:transition-transform object-contain object-center w-full h-full block" src={item.image} />
                                </Link>
                                <div className="mt-4">
                                    <h2 className="text-gray-800 title-font text-lg font-medium">{item.title}</h2>
                                    <p className="mt-1 text-lg">${item.price}</p>
                                </div>
                                <button className='border-2 px-3 py-2 bg-gray-800 text-gray-100 hover:bg-gray-900'  onClick={()=>addToCart(item)} >Add To Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Product