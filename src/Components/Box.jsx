import React, { useState } from "react";
import "./Box.css";

const Box = ({ ActivePopUp, SetActivePopUp, activeimg, setactiveimg }) => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <img
        src={`/public/Rectangle${activeimg}.png`}
        style={{ width: "445px", height: "445px", borderRadius: "16px" }}
        onClick={() => {
          SetActivePopUp(!ActivePopUp);
        }}
      />

      <div
        className="imgDiv"
        style={{
          display: "flex",
          width: "445px",
          height: "88px",
          justifyContent: "space-between",
          marginTop: "32px",
        }}
      >
        <div className="imgHolder" id={activeimg === 1 ? "img1" : ""}>
          <div className="whiteScreen"></div>
          <img
            className="MarkettingImg"
            id="1"
            src="/public/Rectangle1.png"
            onClick={() => {
              setactiveimg(1);
            }}
          />
        </div>
        <div className="imgHolder" id={activeimg === 2 ? "img2" : ""}>
          <div className="whiteScreen"></div>
          <img
            className="MarkettingImg"
            id="2"
            src="/public/Rectangle2.png"
            onClick={() => {
              setactiveimg(2);
            }}
          />
        </div>

        <div className="imgHolder" id={activeimg === 3 ? "img3" : ""}>
          <div className="whiteScreen"></div>
          <img
            className="MarkettingImg"
            id="3"
            src="/public/Rectangle3.png"
            onClick={() => {
              setactiveimg(3);
            }}
          />
        </div>

        <div className="imgHolder" id={activeimg === 4 ? "img4" : ""}>
          <div className="whiteScreen"></div>
          <img
            id="4"
            className="MarkettingImg"
            src="/public/Rectangle4.png"
            onClick={() => {
              setactiveimg(4);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Box;
