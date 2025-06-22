import { useState } from "react";
import ReactDOM from "react-dom/client";
import Add from "./Add";
import "./App.css"; // Import the CSS file

function App() {
  const [language, setLanguage] = useState([
    "HTML",
    "CSS",
    "JS",
    "TS",
    "GOlang",
    "Rust",
  ]);

  function handleClick() {
    setLanguage(["C++", ...language]);
  }
  return (
    <div className="app">
      <h1>Programming Languages</h1>
      <div className="language-grid">
        {language.map((value, index) => (
          <Add key={index} value={value} />
        ))}
      </div>
      <button onClick={handleClick}>Add language</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
