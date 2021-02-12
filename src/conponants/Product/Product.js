import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock} = props.product
    return (
        <div className="product-details">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-list">
                <h4>{name}</h4>
                <p>by: {seller}</p>
                <h5>Price: $ {price}</h5>
                <p>only {stock} left in stock - order soon</p>
                <button 
                className="cart-btn"
                onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart}/> add to cart
                </button>
            </div>
            
        </div>
    );
};

export default Product;