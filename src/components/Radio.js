import "./ToggleSwitch";
import { useState } from "react";

export default function Radio({ options }) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <form className="Radio">
      {options.map((option, index) => (
        <label className="Radio-option" key={index}>
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
          />
          {option}
        </label>
      ))}
    </form>
  );
}
