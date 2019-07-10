import React from "react";

const CartItems = props => {
  return (
    <div>
      <h4>Shopping Cart ({props.cartQty} items)</h4>
      <br />
      {props.cart.map((item, ind) => {
        return (
          <div class="cartItem" id={ind}>
            <img src={item.image1} alt="Item" width="100"/>
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
