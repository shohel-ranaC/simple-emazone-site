import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData/';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Shop.css';
const Shop = () => {
   //console.log(fakeData);
   const products10 = fakeData.slice(0, 10);
   const [products, setProducts] = useState(products10);
   const [cart, setCart] = useState([]);

   useEffect(()=>{
      const savedCard = getDatabaseCart();
      const productKeys = Object.keys(savedCard);
      const previousCart = productKeys.map( existingKey => {
         const product = fakeData.find(pd => pd.key === existingKey);
         product.quantity = savedCard[existingKey];
         return product;
      })
      setCart(previousCart);
   }, [])

   const handleAddProduct = (product)=>{
    //console.log("added products", product);
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter(pd => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];

    }
    else{
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
   }
   
    return (
        <div className="twin-container">
          <div className="product-container">  
             {
               products.map(pd => <Product product={pd} handleAddProduct={handleAddProduct} key={pd.key} showAddToCart={true}></Product> )
             }
          </div>
         <div className="cart-container">
            {/* <h3>Added Cart</h3>
            <h5>Order Summary: {cart.length}</h5> */}
            <Cart cart={cart}>
              <Link to="/review">
               <button className='addToCartBtn'>Order Review</button>
             </Link>
            </Cart>
         </div>
           
        </div>
    );
};

export default Shop;