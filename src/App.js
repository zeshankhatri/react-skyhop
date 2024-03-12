import "./App.css";
import Dropdown from "./Dropdown";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);

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
                </div>
                <div></div>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
