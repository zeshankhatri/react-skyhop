import "./TestingCenter.css";
import Dropdown from "./Dropdown";

export default function TestingCenter({ id }) {
  return (
    <div className="Testing-center">
      <p className="Testing-center-label">Testing Center {id}</p>
      <div className="Testing-center-dropdown">
        <Dropdown
          label="Select Client"
          menuItems={["Client 1", "Client 2", "Client 3"]}
        ></Dropdown>
      </div>
      <div className="Testing-center-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#293e5c"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 23.476562 11.978516 A 1.50015 1.50015 0 0 0 22 13.5 L 22 25.5 A 1.50015 1.50015 0 0 0 23.5 27 L 31.5 27 A 1.50015 1.50015 0 1 0 31.5 24 L 25 24 L 25 13.5 A 1.50015 1.50015 0 0 0 23.476562 11.978516 z"></path>
        </svg>
      </div>
    </div>
  );
}
