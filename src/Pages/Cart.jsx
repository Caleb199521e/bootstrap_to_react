import React from "react";
import { useCart } from "../Context/CartContext"; // Ensure this path is correct
import styles from "./Cart.module.css";
import { FaTrashCan } from "react-icons/fa6";
import { currency } from "../utils";


const Cart = () => {

  const { cart, removeFromCart, updateQuantity } = useCart();
  console.log("Cart",cart)

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.Price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      {/* Start Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      <div className="untree_co-section before-footer-section">
        <div className="container">
       
          <div className="row mb-5">
          <div className={styles.cartContainer}>
      <h1 className={styles.cartTitle}>Your Cart</h1>
      {cart.length > 0 ? (
        <>
          <div className={styles.cartTable}>
            <div className={styles.cartHeader}>
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Action</span>
            </div>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.productInfo}>
                  <img src={item.Image} alt={item.Name} className={styles.productImage} />
                  <span className={styles.productName}>{item.Name}</span>
                </div>
                <span className={styles.productPrice}>{currency}{item.Price?.toFixed(2)}</span>
                <div className={styles.quantityControl}>
                  <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                  <input 
                    type="number" 
                    value={item.quantity} 
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                    min="1"
                  />
                  <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                </div>
                <span className={styles.productTotal}>{currency}{(item.Price * item.quantity).toFixed(2)}</span>
                <button onClick={() => handleRemove(item.id)} className={styles.removeButton}><FaTrashCan /></button>
              </div>
            ))}
          </div>
          {/* <div className={styles.cartSummary}>
            <span>Total: {currency}{calculateTotal()}</span>
            <button className={styles.checkoutButton}>Proceed to Checkout</button>
          </div> */}
        </>
      ) : (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      )}
    </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="row mb-5">
                {/* <div className="col-md-6 mb-3 mb-md-0">
                  <button className="btn btn-black btn-sm btn-block">Update Cart</button>
                </div> */}
                <div className="col-md-6">
                <a href="./shop"> <button className="btn btn-outline-black btn-sm btn-block">Continue Shopping</button></a> 
                </div>
              </div>
              <div className="row">
                {/* <div className="col-md-12">
                  <label className="text-black h4" htmlFor="coupon">Coupon</label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div className="col-md-8 mb-3 mb-md-0">
                  <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
                </div> */}
                {/* <div className="col-md-4">
                  <button className="btn btn-black">Apply Coupon</button>
                </div> */}
              </div>
            </div>
            <div className="col-md-6 pl-5">
              <div className="row justify-content-end">
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-md-12 text-right border-bottom mb-5">
                      <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <span className="text-black">Subtotal</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">{currency}{calculateTotal()}</strong>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <span className="text-black">Total</span>
                    </div>
                    <div className="col-md-6 text-right">
                      <strong className="text-black">{currency}{calculateTotal()}</strong>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn btn-black btn-lg py-3 btn-block" onClick={() => window.location.href='/checkout'}>Proceed To Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
