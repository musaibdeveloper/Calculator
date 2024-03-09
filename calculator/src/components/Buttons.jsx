import React from "react";
import "./Buttons.css";

export default function Buttons({ onButtonClick }) {
  const ButtonNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "*",
    "/",
    ".",
    "=",
  ];
  return (
    <div className="buttonsConatiner">
      {ButtonNames.map((button) => {
        return (
          <button onClick={() => onButtonClick(button)} className="button">
            {button}
          </button>
        );
      })}
    </div>
  );
}
