import React, { useState } from "react";
import "../App.css";

const Demo2 = () => {
  const [color, setColor] = useState("black");
  // const [textColor, setTextColor] = useState("black");
  const [isBlack, setIsBlack] = useState(true);
  const [fillColor , setFillColor] = useState(false)
  

  const handleChnageTextColor = (e) => {
    setIsBlack(!isBlack);
  }

  return (
    <>
      <h1 >My favorite color is {color} !</h1>
      <button style={{ color: isBlack ? "black" : "white" }} 
        onChange={handleChnageTextColor}
        value={isBlack}
        className="btn"
        type="button"
        onClick={() => setColor("blue")}
      >
        Blue
      </button>

      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
};

export default Demo2;
