import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container p-0">
        <Weather defaultCity="New York" />
        <footer>
          <p className="FooterLink">
            This project was coded by Elvina, is{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sorced on a GitHab{" "}
            </a>
            and{" "}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
