import React from "react";

const CartTotal = props => {
  return (
    <div className="right-section">
      <div
        className="cartTotal"
      >
        <div>
          <button
            className="checkout"
            type="button"
          >
            Go to checkout
          </button>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <span>
                  <span>Items ({props.cartQty})</span>
                </span>
              </td>
              <td className="val-col">
                <span>
                  <span>${props.cartTotal}</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
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
              <td className="val-col">
                <span>
                  <span>Free</span>
                </span>
              </td>
            </tr>
            <tr>
              <td className="line-x" >
              </td>
              <td className="line-x" >
              </td>
            </tr>
            <tr>
              <td className="total-row">
                <span>
                  <span>Total</span>
                </span>
              </td>
              <td className="val-col total-row">
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



