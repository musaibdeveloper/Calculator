import React from "react";
import "./Display.css";

export default function Display({ displayValue }) {
  return (
    <div className="container">
      <input className="input" value={displayValue} readOnly />
    </div>
  );
}
