import React, { useState } from "react";
import { Link } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import "./PaymentFormPage.css";

export const PaymentFormPage = () => {
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [amount, setAmount] = useState(1); // Initial amount is R50
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [annualTaxAdded, setAnnualTaxAdded] = useState(false);

  const handleToken = (token) => {
    // You can send the token to your backend server to process the payment
    console.log(token);
    // After processing the payment, you can close the popup and mark payment as completed
    setShowPaymentPopup(false);
    setPaymentCompleted(true);
  };

  const handlePayment = () => {
    setShowPaymentPopup(true);
  };

  const handleAddToAnnualTax = () => {
    // Your logic to add amount to annual tax
    console.log("Adding to annual tax...");
    setAnnualTaxAdded(true); // Marking annual tax as added
    setPaymentCompleted(true); // Marking payment as completed
  };

  const handleLogout = () => {
    // Your logout logic here
    console.log("Logout");
  };

  return (
    <>
    <h1
      className="center-text"
      style={{
        fontSize: "3.5rem",
        textAlign: "center",
        paddingTop: ".1rem",
      }}
    >
      <span style={{ color: "#00A9FF" }}>E-Parking </span>
      Challan.
    </h1>
    <div className="payment-container">
    <Link to="/loginpage">
      <button onClick={handleLogout} className="logout-button">
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
          <button
            onClick={handlePayment}
            className="payment-button"
            disabled={annualTaxAdded || paymentCompleted} // Disable if annual tax is added or payment completed
          >
            Pay Now
          </button>
          <button
            onClick={handleAddToAnnualTax}
            className={`annual-tax-button ${
              annualTaxAdded ? "added-to-annual-tax" : ""
            }`}
            disabled={annualTaxAdded || paymentCompleted} // Disable if annual tax is added or payment completed
          >
            {annualTaxAdded ? "Added To Annual Tax" : "Add to Annual Tax"}
          </button>
        </div>
      )}

      {showPaymentPopup && (
        <div className="payment-popup">
          <h2>Payment Gateway</h2>
          <StripeCheckout
            stripeKey="your_stripe_public_key"
            token={handleToken}
            amount={amount * 100} // Stripe expects the amount in cents
            currency="ZAR" // Change to ZAR for South African Rand
          />
          <button onClick={() => setShowPaymentPopup(false)}>Close</button>
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
