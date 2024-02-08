import React, { useState } from "react";
import "./colors-button.css";

export default function ColorsButton({ color, onPress }) {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const changeBackgroundColor = (color) => {
    setBackgroundColor(color);
  };

  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "purple",
  ];

  return (
    <div
      className="buttons-container"
      style={{ backgroundColor: backgroundColor }}
    >
      {colors.map((item, index) => (
        <button
          key={index}
          style={{ backgroundColor: item }}
          onClick={() => changeBackgroundColor(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
