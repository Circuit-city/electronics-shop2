import React from "react";
import './Checkout.css'


function Chekout () {
    return(
        <>
            <div className="containerwarpper">
                <form action="" className="address-details">
                    <div className="frm">
                        <h1>Checkout</h1>
                    </div>
                    <div className="card">
                        <div className="leftside">
                            <img src={require('../assets/laptop-preview.png')} alt="laptop" className="img3"/>
                            <div className="overlay"></div>
                        </div>
                    <div className="header">ADDRESS DETAILS</div>
                        <div className="form-group">
                            <label className="input-label">Billing Address:</label>
                            <input type="text" name="billing-address" id="billing-address" className="form-control" placeholder="Enter your Billing Address"/>
                        </div>

                    <div className="form-group">
                        <label className="input-label">Payment Method:</label>
                        <input type="text" name="payment-method" id="payment-method" className="form-control" placeholder="Select Payment Method"/>
                    </div>

                    <div className="form-group">
                        <label className="input-label">Expiry Date:</label>
                        <input type="date" name="expiry-date" id="expiry-date" className="form-control" placeholder="Choose Expiry Date"/>
                    </div>

                    <div className="form-group">
                        <button type="submit"  className="btn btn-warning">Purchase</button>
                    </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Chekout;