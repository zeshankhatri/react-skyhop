import { useState } from "react";

export default function Radio({ options }) {
  const [selected, setSelected] = useState(null);

  return (
    <form>
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
