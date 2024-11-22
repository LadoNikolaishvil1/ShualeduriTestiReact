import React from "react";
import Box from "./Box.jsx";
import Header from "./Header.jsx";
import TextBox from "./TextBox.jsx";
import { useState } from "react";

const Container = () => {
  const [Count, setCount] = useState(0);
  const [ActivePopUp, SetActivePopUp] = useState(false);
  const [activeimg, setactiveimg] = useState(1);
  return (
    <>
      <div style={{ width: "80%" }}>
        <Header Count={Count} setCount={setCount} />
        <div
          style={{
            width: "100%",
            height: "565px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            ActivePopUp={ActivePopUp}
            SetActivePopUp={SetActivePopUp}
            const
            activeimg={activeimg}
            setactiveimg={setactiveimg}
          />
          <TextBox Count={Count} setCount={setCount} />
        </div>
      </div>
      <div
        className="PopUp"
        style={{
          display: `${ActivePopUp ? "grid" : "none"}`,
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "5",
          height: "100vh",
          placeContent: "center",
        }}
      >
        <div
          className="blackScreen"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "#000000",
            opacity: "75%",
          }}
        ></div>
        <div className="PopUpContainer" style={{ zIndex: "999" }}>
          <button
            style={{
              cursor: "pointer",
              position: "absolute",
              right: "550px",
              top: "20px",
              border: "none",
              background: "transparent",
            }}
            onClick={() => {
              SetActivePopUp(false);
            }}
          >
            <img src="/public/Close.png" alt="" />
          </button>
          <Box activeimg={activeimg} setactiveimg={setactiveimg} />
          <div
            className="previous"
            style={{
              position: "absolute",
              cursor: "pointer",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#ffffff",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              top: "270px",
              left: "510px",
            }}
            onClick={() => {
              if (activeimg > 0) {
                setactiveimg(activeimg - 1);
              } else if (activeimg == 0) {
                setactiveimg(4);
              }
            }}
          >
            <img
              src="/public/next.png"
              alt=""
              style={{
                rotate: "180deg",
              }}
            />
          </div>
          <div
            className="Next"
            style={{
              position: "absolute",
              cursor: "pointer",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              background: "#ffffff",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              top: "270px",
              right: "510px",
            }}
            onClick={() => {
              if(activeimg < 4){
                setactiveimg(activeimg + 1);
              }else if(activeimg == 4){
                setactiveimg(1);
              }
            }}
          >
            <img src="/public/next.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
