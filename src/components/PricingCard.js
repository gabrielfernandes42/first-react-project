import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";

const PricingCard = ({ plan, bitcoin, days }) => {
  return (
    <div className="pricing">
      <div className="card">
        <h3>- {plan} -</h3>
        <span className="bar"></span>
        <p className="btc">{bitcoin} BTC</p>
        <p>- {days} Days -</p>
        <p>- Views -</p>
        <p>- Featured -</p>
        <p>- Private Quarters -</p>
        <Link to="/contact" className="btn">
          Book
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
