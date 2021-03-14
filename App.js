import React from "react";
import "./styles/styles.css";
import Slider from "./images/icon-slider.svg";

function App() {
  const slider = <img src={Slider} alt="Slider" />;

  return (
    <div className="wrapper">
      <div className="title-card">
        <h1 className="title">Simple, traffic-based pricing</h1>
        <p className="sub-title">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
      <div className="interactive-model">
        <div className="one">
          <p className="page-views">100k pageviews</p>
          <div className="right">
            <h1 className="price">$16.00</h1>
            <p className="month"> / month</p>
          </div>
        </div>
        <div className="two">{slider}</div>
        <div className="three">
          <p className="monthly-billing">Monthly Billing</p>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <p className="yearly-billing">Yearly Billing</p>
          <p className="discount">25% discount</p>
        </div>
        <div className="four">
          <ul>
            <li>Unlimited websites</li>
            <li>100% data ownership</li>
            <li>Email reports</li>
          </ul>
          <button>Start my trial</button>
        </div>
      </div>
    </div>
  );
}

export default App;
