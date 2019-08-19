import React from "react";

const CartTotal = props => {
  return (
    <div className="cart_right-section">
      <div
        className="cartTotal"
      >
        <div>
          <button
            className="cart_button"
            id="cart_checkout"
            type="button"
          >
            Go to checkout
          </button>
        </div>
        <table className="cart_table">
          <tbody>
            <tr className="cart_tr">
              <td className="cart_td">
                <span>
                  <span>Items ({props.cartQty})</span>
                </span>
              </td>
              <td className="cart_td cart_val-col">
                <span>
                  <span>${props.cartTotal}</span>
                </span>
              </td>
            </tr>
            <tr className="cart_tr">
              <td className="cart_td">
                <span>
                  <span>Shipping</span>
                  <span>
                    <button
                      className="fas fa-info-circle"
                      type="button"
                    />
                      <div>
                        <span>
                          {/* <span>
                            You'll see shipping options and costs on the Checkout
                            page.
                          </span> */}
                        </span>
                      </div>
                  </span>
                </span>
              </td>
              <td className="cart_td cart_val-col">
                <span>
                  <span>Free</span>
                </span>
              </td>
            </tr>
            <tr className="cart_tr">
              <td className="cart_td cart_line-x" >
              </td>
              <td className="cart_td cart_line-x" >
              </td>
            </tr>
            <tr className="cart_tr">
              <td className="cart_td cart_total-row">
                <span>
                  <span>Total</span>
                </span>
              </td>
              <td className="cart_td cart_val-col cart_total-row">
                <span>
                  <span>${props.cartTotal}</span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CartTotal;



