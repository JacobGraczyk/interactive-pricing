import React, { useState, useRef } from "react";
import "./styles/styles.css";

function App() {
  const [rangeValue, setRangeValue] = useState("3");
  const [toggleStatus, setToggleStatus] = useState(false);

  const inputRef = useRef();
  function handleChange(e) {
    const sliderInput = inputRef.current.value;
    setRangeValue(sliderInput);
  }

  function handleToggle() {
    setToggleStatus(!toggleStatus);
  }

  let info;
  switch (rangeValue) {
    case "1":
      info = {
        pageViews: "10k",
        perMonth: 8,
        gradient: "0%",
      };
      break;
    case "2":
      info = {
        pageViews: "50k",
        perMonth: 12,
        gradient: "25%",
      };
      break;
    case "3":
      info = {
        pageViews: "100k",
        perMonth: 16,
        gradient: "50%",
      };
      break;
    case "4":
      info = {
        pageViews: "500k",
        perMonth: 24,
        gradient: "75%",
      };
      break;
    case "5":
      info = {
        pageViews: "1m",
        perMonth: 36,
        gradient: "100%",
      };
      break;
    default:
      info = {
        pageViews: "100k",
        perMonth: 16,
        gradient: "50%",
      };
  }

  const discountOff = info.perMonth * 0.25;
  const discount = info.perMonth - discountOff;
  let price;
  toggleStatus ? (price = discount) : (price = info.perMonth);

  const rangeSliderStyle = {
    background:
      "linear-gradient(to right, hsl(174, 77%, 80%)" +
      info.gradient +
      ", hsl(224, 65%, 95%)" +
      info.gradient +
      ")",
  };

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
          <p className="page-views">{info.pageViews} pageviews</p>
          <div className="right">
            <h1 className="price">${price}.00</h1>
            <p className="month"> / month</p>
          </div>
        </div>
        <div className="two">
          <input
            type="range"
            min="1"
            max="5"
            ref={inputRef}
            value={rangeValue}
            onChange={handleChange}
            className="rangeSlider"
            style={rangeSliderStyle}
            id="myRange"
          />
        </div>
        <div className="three">
          <p className="monthly-billing">Monthly Billing</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={toggleStatus}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
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
