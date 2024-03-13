import "./ToggleSwitch.css";
import { useState } from "react";

export default function ToggleSwitch() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="Toggle-container">
      <div className={`Toggle ${!toggle ? "disable" : ""}`}>
        <div
          className={`Toggle-button ${!toggle ? "move" : ""}`}
          onClick={() => setToggle(!toggle)}
        ></div>
      </div>
      <p className="Toggle-text">Toggle {toggle ? "ON" : "OFF"}</p>
    </div>
  );
}
