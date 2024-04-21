import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export const LoginPage = () => {
 

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

      <div className="login-container">
        <h1>Login</h1>
        <form  className="login-form">
          <label className="flex-col">
            Registeration No.{" "}
            <input
              className="login-input"
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="E-Parking-Challan"
              name="registrationNumber"
              required
            />
          </label>
          <Link to="/paymentformpage">
          <button type="submit" className="login-button">
            Login
          </button>
          </Link>
        </form>
      </div>
    </>
  );
};
