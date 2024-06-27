import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, decrease, remove } from '../store/cartSlice'

function Cart() {
  //get cart data from the useSelector
  const dispatch = useDispatch();
  function removeItem(id) {
    dispatch(remove(id));
  }

  // add To Count
  function addToCount(item) {
    dispatch(add(item));
  }

  let productCart = useSelector(state => state.cart.items)
  // console.log(productCart)

  // subtract From Count
  function subtractFromCount(item) {
    for (let x in productCart) {
      if (productCart[x].id === item.id) {
        dispatch(decrease(x));
        break;
      }
    }
  }


  //Map used to map cart data
  let map = new Map();



  //ProductCart items are mapped to a Map to get quantity property
  productCart.forEach((item) => {
    if (map.has(item.id)) {
      map.set(item.id, { ...item, count: map.get(item.id).count + 1 });
    } else {
      map.set(item.id, { ...item, count: 1 });
    }
  });

  // [...map].map((item)=>{
  //   console.log(item)
  // })

  return (
    <div>
      <h1 className='sm:mt-0 relative font-bold text-center text-4xl border-t-4 top-4 border-gray-600 mb-4 py-2'> Cart </h1>
      
      <article className='h-full relative flex flex-col sm:flex-row'>
        {/* cart data */}
        <section >
          {map && [...map].map((item) =>
          (
            <div className=' px-6 py-3 flex flex-col sm:flex-row gap-2  border-2 justify-between' > 
              <img className="w-12 h-12 " src={`${item[1].image}`} alt={` item image not available `} />
              
              <div className="sm:w-96 px-0 sm:px-4 py-0 sm:py-2 overflow-hidden"> {item[1].title}</div>
              {/* quantity counter section */}
              <div className='flex ' >
                <button onClick={() => addToCount(item[1])} className='bg-red-600 hover:bg-red-800 text-white text-2xl px-2 py-1'>+</button>
                <div className="px-4 py-2">Quantity: {item[1].count} </div>
                <button onClick={() => subtractFromCount(item[1])} className='bg-red-600 hover:bg-red-800 text-white text-2xl px-2 py-1'>-</button>
              </div>
              <button className='sm:mx-2 px-0 sm:px-3 sm:py-2 py-1 bg-red-600 text-gray-100 hover:bg-red-800' onClick={() => removeItem(item[1].id)} >Remove</button>
            </div>
          )
          )}
        </section>
        {/* price calculator */}
        {/* flexible price calculator to be sticky and remains at the bottom when small screen */}
        {productCart.length &&
          <section className='sticky sm:sticky bottom-0 z-10 bg-white top-20 h-1/3 border-2 px-6 py-3 '>
            <div>Total Amount</div>
            <div>No. of items : {productCart.length}</div>
            <div>Discount (%) : 0</div>
            <div>Shipping Charges : 0</div>
            <div className='border-b-2 border-black'></div>
            <div className='text-xl font-bold'>Total Price : {productCart.reduce((prev, curr) =>
              prev + curr.price, 0).toFixed(2)}</div>
          </section>
        }
      </article>
    </div>
  )
}

export default Cart