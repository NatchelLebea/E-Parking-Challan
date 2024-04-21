import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faCreditCard, faCalendarAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import "./PaymentFormPage.css";

export const PaymentFormPage = () => {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [amount, setAmount] = useState(50);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [annualTaxAdded, setAnnualTaxAdded] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowPaymentPopup(false);
    setPaymentCompleted(true);
  };

  const handlePayment = () => {
    setShowPaymentPopup(true);
  };

  const handleAddToAnnualTax = () => {
    console.log("Adding to annual tax...");
    setAnnualTaxAdded(true);
    setPaymentCompleted(true);
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <>
      <h1 className="center-text" style={{ fontSize: "3.5rem", textAlign: "center", paddingTop: ".1rem" }}>
        <span style={{ color: "#00A9FF" }}>E-Parking </span>Challan.
      </h1>
      <div className="payment-container">
        <Link to="/">
          <button className="logout-button">
            <FontAwesomeIcon icon={faSignOutAlt} />
          </button>
        </Link>
        <h1>Payment Form</h1>
        {!paymentCompleted && (
          <div>
            <div className="payment-slip">
              <div className="receipt">
                <h2>Receipt</h2>
                <p>Amount: R{amount}</p>
                <p>Type of Violation: Illegal Parking</p>
                <p>Location: Main Street</p>
                <p>Date and Time: {new Date().toLocaleString()}</p>
              </div>
            </div>
            <button onClick={handlePayment} className="payment-button" disabled={annualTaxAdded || paymentCompleted}>
              Pay Now
            </button>
            <button onClick={handleAddToAnnualTax} className={`annual-tax-button ${annualTaxAdded ? "added-to-annual-tax" : ""}`} disabled={annualTaxAdded || paymentCompleted}>
              {annualTaxAdded ? "Added To Annual Tax" : "Add to Annual Tax"}
            </button>
          </div>
        )}
        {showPaymentPopup && (
          <div className="payment-popup">
            <h2>Payment Gateway</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-icon-wrapper">
                <FontAwesomeIcon icon={faCreditCard} className="input-icon"/>
                <input type="text" placeholder="Card Number" required />
              </div>
              <div className="input-icon-wrapper">
                <FontAwesomeIcon icon={faCalendarAlt} className="input-icon"/>
                <input type="text" placeholder="Expiration Date" required />
              </div>
              <div className="input-icon-wrapper">
                <FontAwesomeIcon icon={faLock} className="input-icon"/>
                <input type="text" placeholder="CVC" required />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit" className="popup-button">Pay</button>
                <button onClick={() => setShowPaymentPopup(false)} className="close-button">Close</button>
              </div>
            </form>
          </div>
        )}
        {paymentCompleted && (
          <div className="receipt">
            <h2>Receipt</h2>
            <p>Amount: R{amount}</p>
            <p>Type of Violation: Illegal Parking</p>
            <p>Location: Main Street</p>
            <p>Date and Time: {new Date().toLocaleString()}</p>
          </div>
        )}
      </div>
    </>
  );
};
