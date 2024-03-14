import "./Dropdown.css";
import { useState } from "react";

export default function Dropdown({ label, menuItems }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  const handleSelect = (menuItem) => {
    setSelected(menuItem);
    setOpen(false);
  };

  return (
    <div className="Dropdown">
      <button className="Dropdown-form" onClick={() => setOpen(!open)}>
        <p className="Dropdown-selected">{selected}</p>
        <svg
          fill="none"
          height="24"
          viewBox="0 -7 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m17 10-5 6-5-6z" fill="#0d0d0d" />
        </svg>
      </button>
      {open && (
        <ul className="Dropdown-menu">
          {menuItems.map((menuItem, index) => (
            <li
              key={index}
              className="menu-item"
              onClick={() => handleSelect(menuItem)}
            >
              {menuItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
