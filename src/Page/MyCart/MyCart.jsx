import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import MyCartData from '../../components/MyCartData/MyCartData';


const MyCart = () => {
    
    const myCarts = useLoaderData()
    const [myCart, setMyCart] = useState(myCarts)
    const [cartData, setCartData] = useState([])
    
    // console.log(myCarts);

    // const filteredAds = myCart.filter((cart) => cart.email);
    // // setMyCart(filteredAds)
    // console.log(myCart)
    // const { uid } = cart;

    

    return (
        <div className='grid md:grid-cols-2 gap-4 py-20'>
            {
                myCart.map((cart) => <MyCartData  cart={cart} myCart={myCart} setMyCart={setMyCart} cartData={cartData} setCartData={setCartData}></MyCartData >)
            }
      </div>
    );
  }

export default MyCart;




























        