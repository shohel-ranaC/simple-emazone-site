import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ProductDetails from '../ProductDetails/ProductDetails';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from './../Cart/Cart';
import happyImage from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

   const handlePlaceOrder = () =>{
    setCart([]);
    setOrderPlaced(true);
    processOrder();
       // console.log('order placed');
    }

    const removeProduct = (productKey) => {
       // console.log("Remove Product", productKey);
        const newCart =cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);

    }, [])

    let thankYou;
    if(orderPlaced){
    thankYou = <img src={happyImage} alt="gif" />
    }

    return (
        <div className="twin-container">
            <div className="product-container">
            {
                cart.map(pd => <ReviewItem
                     product={pd}
                      key={pd.key}
                      removeProduct={removeProduct}
                     ></ReviewItem>)
                    
            }

            {
                thankYou
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="addToCartBtn">Place Order</button>
                </Cart>

            </div>
        </div>
    );
};

export default Review;