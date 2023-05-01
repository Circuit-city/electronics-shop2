import {useState} from "react";
import { useEffect } from "react";
import './Checkout.css'


function Chekout () {

    const [Billing_Address, setBilling_Address] = useState('');
    const [Payment_Method, setPayment_Method] = useState('');
    const [Expiry_Date, setExpiry_Date] = useState('');
    const [Card_Number, setCard_Number] = useState('');
    const [CVV, setCVV] = useState('');
    const [showData, setShowData] = useState(false);


  const handleBilling_AddressChange = (event) => {
    setBilling_Address(event.target.value);
  };

  const handlePayment_MethodChange = (event) => {
    setPayment_Method(event.target.value);
  };

  const handleExpiry_DateChange = (event) => {
    setExpiry_Date(event.target.value);
  };

  const handleCard_NumberChange = (event) => {
    setCard_Number(event.target.value);
  };

  const handleCVVChange = (event) => {
    setCVV(event.target.value);
  };

 

  const [formData, setFormData] = useState({ Billing_Address: '', Payment_Method: '', Expiry_Date: '', Card_Number: '', CVV: ''});

    const handleSubmit = (event) => {
       alert (`Your Billing details have been Verified.`); 
      event.preventDefault();
      setFormData({ Billing_Address: Billing_Address, Payment_Method: Payment_Method, Expiry_Date: Expiry_Date, Card_Number: Card_Number, CVV: CVV });
   
    };



    function DisplayData(props) {
        return (
          <div className="div-check">
            <h1>Invoice</h1>
            <p>Billing Address: {props.Billing_Address}</p>
            <p>Payment Method: {props.Payment_Method}</p>
            <p>Expiry Date: {props.Expiry_Date}</p>
            <p>Card_Number: {props.Card_Number}</p>
            <p>CVV: {props.CVV}</p>
          </div>
        );
      }
      

      useEffect(() => {
        if (
          formData.Billing_Address !== "" &&
          formData.Payment_Method !== "" &&
          formData.Expiry_Date !== "" &&
          formData.Card_Number !== "" &&
          formData.CVV !== ""
        ) {
          setShowData(true);
        }
      }, [formData]);



    return(
        <>
            <div className="containerwarpper">

                <form onSubmit={handleSubmit} className="address-details">

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
                            <input type="text" value={Billing_Address} onChange={handleBilling_AddressChange} name="billing-address" id="billing-address" className="form-control" placeholder="Enter your Billing Address"/>
                        </div>

                    <div className="form-group">
                        <label className="input-label">Payment Method:</label>
                        <input type="text" value={Payment_Method} onChange={handlePayment_MethodChange} name="payment-method" id="payment-method" className="form-control" placeholder="Select Payment Method"/>
                    </div>

                    <div className="form-group">
                        <label className="input-label">Expiry Date:</label>
                        <input type="date" value={Expiry_Date} onChange={handleExpiry_DateChange} name="expiry-date" id="expiry-date" className="form-control" placeholder="Choose Expiry Date"/>
                    </div>

                    <div className="form-group">
                        <label className="input-label">Card Number:</label>
                        <input type="text" value={Card_Number} onChange={handleCard_NumberChange} name="card-number" id="card-number" className="form-control" placeholder="Choose card number"/>
                    </div>

                    <div className="form-group">
                        <label className="input-label">CVV:</label>
                        <input type="text" value={CVV} onChange={handleCVVChange} name="CVV" id="CVV" className="CVV" placeholder="Enter CVV number"/>
                    </div>


                    <div className="form-group">
                        <button type="submit"  onClick={handleSubmit} className="btn btn-warning">Purchase</button>
                       
                    </div>

                    </div>
                </form>

                {showData && <DisplayData  Billing_Address={formData.Billing_Address} Payment_Method={formData.Payment_Method} Expiry_Date={formData.Expiry_Date} Card_Number={formData.Card_Number} CVV={formData.CVV}  />}
            </div>
        </>
    );
};

export default Chekout;