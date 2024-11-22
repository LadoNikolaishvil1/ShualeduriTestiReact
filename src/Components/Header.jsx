import React from "react";
import "./Header.css";
import { useState } from "react";

const Header = ({ Count, setCount }) => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="Header">
      <ul className="HeaderList">
        <li className="Main-Icon">sneakers</li>
        <li className="Item">
          <p>Collections</p>
        </li>
        <li className="Item">
          <p>Men</p>
        </li>
        <li className="Item">
          <p>Women</p>
        </li>
        <li className="Item">
          <p>About</p>
        </li>
        <li className="Item">
          <p>Contact</p>
        </li>
        <li className="icon">
          <img
            src="./Shape.png"
            alt=""
            onClick={() => {
              setShowCart(!showCart);
            }}
          />
          <div
            className="CartitemCounterBox"
            style={{ display: `${Count > 0 ? "grid" : "none"}` }}
          >
            <p>{Count}</p>
          </div>
          <div
            className="CartItemPopUp"
            style={{ display: `${showCart ? "flex" : "none"}` }}
          >
            <p className="Cart">Cart</p>
            {Count <= 0 ? (
              <p className="CartEmptyTxt">Your cart is empty.</p>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "30px",
                }}
              >
                <div className="CartItem">
                  <img
                    className="CartItemImg"
                    src="https://s3-alpha-sig.figma.com/img/f711/756b/d02ccc2096958b6d713b9617cc766510?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qoc0LMI-r71Qm3Bbz2Mv2mZ8pPiv4WEtB~mZbsMgAemOfVNd2W3X5yQPg0K0SQsPeOiv7DYWOZcuxyO44rI4I6WxlZXiOSXuAUifJC4y~YKcQRVmhSmn6hp-C7XaAe3Nc2c6LfVE15lk~m6YO3tR9lCiscUhwrYP2UQZ061QgNQK3oa7gdcca20F-2yjx-cR4t2kXBnbr5wAHUaqrBKHZxKGrdqNioOSbs0aIqcOOHmeAB3ihM5gBN6PoeXpJtQ-3bHXkrKWB5HUQvps-Ga0LgHWm-IUq4DOmDDXXz6k1uzSGZUevekqfyh4fz4Dopclxd5ZbI-EWOgvBtdSkTkfkg__"
                    alt=""
                  />
                  <div className="CartItemTxt">
                    <p>Fall Limited Edition Sneakers</p>
                    <div className="CartItemPriceTxt">
                      <p>
                        $125.00 x {Count} <span>${Count * 125}.00</span>
                      </p>
                    </div>
                  </div>
                  <img
                    className="DeleteImg"
                    src="/public/Mask 2.png"
                    alt=""
                    onClick={() => {
                      setCount(Count - 1);
                    }}
                  />
                </div>
                <button className="Checkout">Checkout</button>
              </div>
            )}
          </div>
        </li>
        <li className="PfpImg">
          <img src="Oval.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
