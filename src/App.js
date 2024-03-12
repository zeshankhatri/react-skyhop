import "./App.css";
import Dropdown from "./Dropdown";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const [filename, setFilename] = useState(null);

  const fileChangeHandler = (event) => {
    const reader = new FileReader();

    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      const filename = event.target.files[0].name;
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
                  <button
                    className="Modal-close"
                    onClick={() => setModal(false)}
                  >
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
                    <div className="Upload-container">
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
                      {filename && <p className="Upload-filename">Current Manifest Chosen: {filename}</p>}
                    </div>
                    <input
                      type="file"
                      accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                      onChange={fileChangeHandler}
                      className="Upload-input"
                    ></input>
                  </label>
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
