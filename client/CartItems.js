import React from "react";

const CartItems = props => {
  return (
    <div>
      <h4>Shopping Cart ({props.cartQty} items)</h4>
      <br />
      {props.cart.map((item, ind) => {
        return (
          <div class="cartItem" id={ind} >
            Seller {item.seller}
            <br />
            <img src={item.image1} alt="Item" width="100"/>
            {item.name}
            <br />
            {item.condition}
            <br />
            Qty {item.qty}
            <br />
            ${(item.price * item.qty).toFixed(2)}
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
