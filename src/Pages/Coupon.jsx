function Coupon() {
  return (
    <div className="summary">
      <h5>Coupon</h5>
      <p className="m-0">Enter your coupon code if you have one.</p>
      <div className="coupn">
        <input type="text" placeholder="coupon code" />
        <button className="apply-btn">Apply Coupon</button>
      </div>
      <div className="note">
        <h5>Note</h5>
        <textarea
          className="coupn-text"
          placeholder="Add special instructions for your seller..."
          defaultValue={""}
        />
      </div>
      <div className="totals">
        <h6 className="sub-total">
          SUBTOTAL <span>£860.00</span>
        </h6>
        <h6 className="grand-total">
          GRAND TOTAL <span>£860.00</span>
        </h6>
        <p>Shipping &amp; taxes calculated at checkout</p>
      </div>
      <div className="d-flex justify-content-between">
        <button className="update-cart">Update Cart</button>
        <a href="checkout"><button className="checkout">Check Out</button></a>
      </div>
    </div>
  );
}

export default Coupon;
