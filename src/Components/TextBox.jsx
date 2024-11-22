import React from "react";
import "./TextBox.css";
import { useState } from "react";

const TextBox = ({ Count, setCount }) => {
    const [Numb, setNumb] = useState(0);
  return (
    <div className="TextContainer">
      <p
        style={{
          fontSize: "13px",
          fontWeight: "700",
          color: "#FF7E1B",
          marginBottom: "27px",
        }}
      >
        Sneaker Company
      </p>
      <p
        style={{
          fontSize: "44px",
          fontWeight: "700",
          color: "#1D2026",
          marginBottom: "32px",
        }}
      >
        Fall Limited Edition Sneakers
      </p>
      <p
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#69707D",
          marginBottom: "24px",
        }}
      >
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="PriceBox">
        <p
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1D2026",
          }}
        >
          $125.00
        </p>
        <p
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#FF7E1B",
            height: "27px",
            width: "51px",
            display: "grid",
            placeItems: "center",
            background: "#FFEEE2",
            borderRadius: "4px",
          }}
        >
          50%
        </p>
      </div>
      <p style={{ position: "relative", top: "14px" }}>
        <del
          style={{
            fontSize: "16px",
            fontWeight: "700",
            color: "#B6BCC8",
            textDecoration: "line-through",
          }}
        >
          $250.00
        </del>
      </p>
      <div className="AddToCartBox">
        <div className="clicker">
          <button
            className="subtract"
            onClick={() => {
              if (Numb > 0) {
                setNumb(Numb - 1);
              }
            }}
          >
            <img
              src="/public/minus1.png"
              alt=""
              style={{ width: "12", height: "16px", marginTop: "15px" }}
            />
          </button>
          <p>{Numb}</p>
          <button
            className="add"
            onClick={() => {
              setNumb(Numb + 1);
            }}
          >
            <img
              src="/public/plus.png"
              alt=""
              style={{ width: "13.71px", height: "13.71px" }}
            />
          </button>
        </div>
        <button className="AddToCartBtn" onClick={() => {
            setCount(Count + Numb);
            setNumb(0);
        }}>
          <img
            src="/public/WhiteShape.png"
            alt=""
            style={{ width: "17.46px", height: "16px" }}
          />
          <p style={{ fontWeight: "700", color: "#fff", cursor: "pointer" }}>
            Add to cart
          </p>
        </button>
      </div>
    </div>
  );
};

export default TextBox;
