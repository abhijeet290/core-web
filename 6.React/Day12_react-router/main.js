import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./src/Home";
import Contact from "./src/Contact";
import Dashboard from "./src/Dashboard";

import "./src/style.css";
import Details from "./src/Details";
import Hello from "./src/Hello";
import Zero from "./src/Zero";
import Hi from "./src/Hi";
import Github from "./src/Github";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          margin: "10px",
          display: "flex",
          gap: "10px",
          fontStyle: "none",
          textDecoration: "none",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/details">Details</Link>
        <Link to="/github">Github</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<Details />}>
          <Route index element={<Zero />}></Route>
          <Route path="hello" element={<Hello />}></Route>
          <Route path="hi" element={<Hi />}></Route>
        </Route>
        <Route path="/github/:name" element={<Github/>}></Route>
      </Routes>
      <h1>Hello from react-router v7</h1>
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
