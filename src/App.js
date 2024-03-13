import "./App.css";
import Dropdown from "./components/Dropdown";
import ToggleSwitch from "./components/ToggleSwitch";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [filename, setFilename] = useState(null);

  const handleClose = () => {
    setModal(false);
    setFilename(null);
  };

  const fileChangeHandler = (event) => {
    if (event.target.files[0]) {
      const filename = event.target.files[0].name;
      setFilename(filename);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();

    if (event.dataTransfer.files[0]) {
      const filename = event.dataTransfer.files[0].name;
      setFilename(filename);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="Modal-button" onClick={() => setModal(true)}>
          Upload a Document!
        </button>
        {modal && (
          <div className="Modal-background">
            <div className="Modal">
              <div className="Modal-header">
                <div className="button-grid-item">
                  <button className="Modal-close" onClick={handleClose}>
                    x
                  </button>
                </div>
                <p className="Modal-title">Document Upload</p>
              </div>
              <div className="Modal-body">
                <div className="Modal-body-left">
                  <Dropdown
                    menuItems={[
                      "Import Type 1",
                      "Import Type 2",
                      "Import Type 3",
                    ]}
                  />
                  <hr className="Line" />
                  <p className="Modal-subheading">
                    Select a manifest you'd like to import
                  </p>
                  <label>
                    <div
                      className="Upload-container"
                      onDrop={handleDrop}
                      onDragOver={(event) => event.preventDefault()}
                    >
                      <div className="Upload-icon">
                        <svg
                          fill="#f79c24"
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                        >
                          <path d="M24.707,8.793l-6.5-6.5C18.019,2.105,17.765,2,17.5,2H7C5.895,2,5,2.895,5,4v22c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2 V9.5C25,9.235,24.895,8.981,24.707,8.793z M18,21h-8c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h8c0.552,0,1,0.448,1,1 C19,20.552,18.552,21,18,21z M20,17H10c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1C21,16.552,20.552,17,20,17 z M18,10c-0.552,0-1-0.448-1-1V3.904L23.096,10H18z"></path>
                        </svg>
                        <p className="Upload-icon-text">
                          Drag & Drop Here Or <b>Browse</b>
                        </p>
                      </div>
                      <div className="Upload-button">Upload Manifest</div>
                      {filename && (
                        <p className="Success-text">
                          Current Manifest Chosen: {filename}
                        </p>
                      )}
                    </div>
                    <input
                      type="file"
                      accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                      onChange={fileChangeHandler}
                      className="Upload-input"
                    ></input>
                  </label>
                  <hr className="Line"></hr>
                  <p className="Modal-subheading">Elapse Data Checking</p>
                  <p className="Success-text">No Elapsed Dates!</p>
                  <hr className="Line"></hr>
                  <p className="Modal-subheading">Tolerence Window:</p>
                  <div className="Tolerance-window">
                    <ToggleSwitch />
                    <div className="Vertical-line"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#293e5c"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 23.476562 11.978516 A 1.50015 1.50015 0 0 0 22 13.5 L 22 25.5 A 1.50015 1.50015 0 0 0 23.5 27 L 31.5 27 A 1.50015 1.50015 0 1 0 31.5 24 L 25 24 L 25 13.5 A 1.50015 1.50015 0 0 0 23.476562 11.978516 z"></path>
                    </svg>
                    <p className="Tolerance-text">Select Tolerance Level</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
