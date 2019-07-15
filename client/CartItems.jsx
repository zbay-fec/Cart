import React from "react";

const CartItems = props => {
  return (
    <div className="left-section">
      <div >
        <h4 className="title">Shopping Cart ({props.cartQty} items)</h4>
      </div>
      <br />
      {props.cart.map((item, ind) => {
        return (
          <div className="cartItem" id={ind}>
            <div class="cart-head flex">
              <h2 class="seller-ctr truncate">
                <span class="font-weight-light">
                  <span>
                    <span>Seller</span>
                  </span>
                </span>
                <span class="black-link">
                  &nbsp;
                  <span>
                    <a href="" title={`Go to seller page: ${item.seller}`}>
                      <span>{item.seller}</span>
                    </a>
                  </span>
                </span>
              </h2>
              
              <span class="flex align-items-c">
                <span>
                  <button
                    type="button"
                    class="faux-link"
                  >
                    <span>
                      Pay only this seller
                    </span>
                  </button>
                </span>
              </span>
            </div>

            <br />
            <img src={item.image1} alt="Item" width="100" />
            {item.name}
            <br />
            {item.condition}
            <br />
            Qty {item.qty}
            <br />${(item.price * item.qty).toFixed(2)}
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
