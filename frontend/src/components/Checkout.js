import React, { useState, useEffect } from 'react';
import './Checkout.css';
import Layout from './Layout';



function Checkout() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('credit card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [mpesaNumber, setMpesaNumber] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [purchaseComplete, setPurchaseComplete] = useState(false); // new state variable

  useEffect(() => {
    const checkoutItemsFromLocalStorage = localStorage.getItem('checkoutItems');
    if (checkoutItemsFromLocalStorage) {
      setCheckoutItems(Object.values(JSON.parse(checkoutItemsFromLocalStorage)));
    }
  }, []);

  const totalCost = checkoutItems.reduce((acc, item) => acc + item.price, 0);
  const tax = totalCost * 0.1;
  const completeCost = totalCost + tax;

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleCardExpiryChange = (event) => {
    setCardExpiry(event.target.value);
  };

  const handleMpesaNumberChange = (event) => {
    setMpesaNumber(event.target.value);
  };

  const handlePaypalEmailChange = (event) => {
    setPaypalEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (paymentMethod === 'credit card') {
      if (!cardNumber || !cardName || !cardExpiry) {
        alert('Please fill out all credit card fields');
        return;
      }
    } else if (paymentMethod === 'mpesa') {
      if (!mpesaNumber) {
        alert('Please enter your M-Pesa number');
        return;
      }
    } else if (paymentMethod === 'paypal') {
      if (!paypalEmail) {
        alert('Please enter your PayPal email');
        return;
      }
    }


 
  setPaymentMethod('credit card');
  setCardNumber('');
  setCardName('');
  setCardExpiry('');
  setMpesaNumber('');
  setPaypalEmail('');
  setPurchaseComplete(true); 
  localStorage.removeItem('checkoutItems');
};
  

  if (purchaseComplete) { 
    return <h1>Purchase complete. Thank you for shopping with us!</h1>;
  }
return(
  <Layout>
  <div className="container">
  <div className="row">
    <div className="col-lg-6">
      <div className="card order-summary">
        <div className="card-body">
          <h3>Order Summary</h3>
          <hr />
          {checkoutItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <div className="item-info-container">
                <p className="item-name">{item.name}</p>
                <h6 className="price">Price: {item.price}</h6>
              </div>
            </div>
          ))}
          <hr />
          <div className="d-flex flex-column align-items-start">
  <div className="checkout-item">
    <div className="item-info-container">
      <p>Total Cost:</p>
      <h6>ksh {totalCost.toFixed(2)}</h6>
    </div>
  </div>
  <div className="checkout-item">
    <div className="item-info-container">
      <p>Shipping & tax:</p>
      <h6>ksh {tax.toFixed(2)}</h6>
    </div>
  </div>
  <div className="checkout-item">
    <div className="item-info-container">
      <p className="total">TOTAL:</p>
      <h6 className='pricetotal'>ksh {completeCost.toFixed(2)}</h6>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
 


        <div className="col-lg-6">
          <div className="card payment-details">
            <div className="card-body">
              <h3>Payment Details</h3>
              <hr />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="payment-method">Payment Method</label>
                <select
                  className="form-control"
                  id="payment-method"
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                >
                  <option value="credit card">Credit Card</option>
                  <option value="mpesa">Mpesa</option>
                  <option value="paypal">Paypal</option>
                </select>
              </div>
              {paymentMethod === 'credit card' && (
                <div>
                  <div className="form-group">
                    <label htmlFor="card-number">Card Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="card-number"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card-name">Card Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="card-name"
                      value={cardName}
                      onChange={handleCardNameChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="card-expiry">Card Expiry</label>
                    <input
                      type="text"
                      className="form-control"
                      id="card-expiry"
                      value={cardExpiry}
                      onChange={handleCardExpiryChange}
                    />
                  </div>
                </div>
              )}
              {paymentMethod === 'mpesa' && (
                <div className="form-group">
                  <label htmlFor="mpesa-number">Mpesa Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mpesa-number"
                    value={mpesaNumber}onChange={handleMpesaNumberChange}
          />
          </div>
          )}
                {paymentMethod === 'paypal' && (
                
            <div className="form-group">
              <label htmlFor="paypal-email">Paypal Email</label>
                <input type="email" className="form-control" id="paypal-email" value={paypalEmail} onChange={handlePaypalEmailChange}/>
          </div>
          )}
          <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: 'orange', border: 'none'}}>
          Submit Payment
          </button>

          </form>

          </div>
               </div>
                       </div>
                              </div>
            </div>
</Layout>
            
          );
                            
            
          }


          export default Checkout;