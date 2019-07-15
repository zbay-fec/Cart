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
            <div className="cart-head flex">
              <h2 className="seller-ctr truncate">
                <span className="font-weight-light">
                  <span>
                    <span>Seller</span>
                  </span>
                </span>
                <span className="black-link">
                  &nbsp;
                  <span>
                    <a href="" title={`Go to seller page: ${item.seller}`}>
                      <span>{item.seller}</span>
                    </a>
                  </span>
                </span>
              </h2>
              
              <span className="flex">
                <span>
                  <button
                    type="button"
                    className="faux-link"
                  >
                    <span>
                      Pay only this seller
                    </span>
                  </button>
                </span>
              </span>
            </div>


            <div> 
              <div className="cart-bucket-item">
                <div className="item-line">
                  <div className="list-content">
                    <div className="grid-group">
                      <div className="grid-cell">
                        <div className="cart-image">
                          <div className="image-display">
                            <img className="image" src={item.image1} alt="Item" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <br />
            
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
