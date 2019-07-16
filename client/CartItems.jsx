import React from "react";

const CartItems = props => {
  return (
    <div className="left-section">
      <div>
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
                  <button type="button" className="faux-link">
                    <span>Pay only this seller</span>
                  </button>
                </span>
              </span>
            </div>
            <div>
              <div className="cart-bucket-item">
                <div className="item-line">
                  <div className="list-content">
                    <div className="grid-group">
                      <div className="grid-cell-image">
                        <div className="cart-image">
                          <div className="image-display">
                            <img
                              className="image"
                              src={item.image1}
                              alt="Item"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="grid-cell-name">
                        <div className="black-link">
                          <a href="/">
                            <div 
                              className="name"
                              onClick={props.goToItem(item._id)}
                            >
                              {item.name}
                            </div>
                          </a>
                        </div>
                        <div className="condition">{item.condition}</div>
                      </div>
                      <div className="grid-cell-price">
                        <div className="grid-group2">
                          <div className="quantity">
                            <span>Qty</span>
                            <span>
                              <select className="qty-dropdown" value={item.qty} onChange={(e) => props.changeQty(ind, parseInt(e.target.value))}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                            </span>
                            <div className="shipping">
                              Standard
                              <br />
                              Shipping
                              <br />
                              3-5 days
                            </div>
                          </div>
                          <div className="item-price">
                            ${(item.price * item.qty).toFixed(2)}
                            <div className="shipping shipping-price">
                              Free Shipping
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item-footer">
                      <div >
                        <span>
                          <button type="button" className="faux-link">
                            <span>Save for later</span>
                          </button>
                        </span>
                        <div className="line-y">|</div>
                        <span>
                          <button
                            type="button"
                            className="faux-link"
                            onClick={() => props.changeQty(ind, 0)}
                          >
                            <span>
                              Remove
                            </span>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
