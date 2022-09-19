import React, { useState } from 'react';
import fakeData from '../../fakeData/';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
   //console.log(fakeData);
   const products10 = fakeData.slice(0, 10);
   const [products, setProducts] = useState(products10);
   const [cart, setCart] = useState([]);

   const handleAddProduct = (product)=>{
    //console.log("added products", product);
    const newCart = [...cart, product];
    setCart(newCart);
   }
   
    return (
        <div className="shop-container">
          <div className="product-container">  
             {
               products.map(pd => <Product product={pd} handleAddProduct={handleAddProduct}></Product> )
             }
          </div>
         <div className="cart-container">
            {/* <h3>Added Cart</h3>
            <h5>Order Summary: {cart.length}</h5> */}
            <Cart cart={cart}></Cart>
         </div>
           
        </div>
    );
};

export default Shop;