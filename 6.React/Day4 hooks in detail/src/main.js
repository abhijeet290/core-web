import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// Background Color changer

const Main = () => {
  const [color, setColor] = useState("black");
  console.log("render");

  //   useEffect(Callback function, dependency)
  useEffect(() => {
    console.log("useEffect executed"); // it won't execute the code until the color changes
    document.body.style.backgroundColor = color;
  }, [color]);

  console.log("hello");
  return (
    <>
      <h1>Background Color Changer</h1>
      <div className="btn">
        <button
          id="red"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            if (color !== "red") {
              setColor("red");
            }
          }}
        >
          red
        </button>
        {/* pass it as callback if we want to execute it on click event */}
        <button
          id="blue"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          blue
        </button>
        <button
          id="green"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          green
        </button>
        <button
          id="cyan"
          style={{ backgroundColor: "cyan" }}
          onClick={() => setColor("cyan")}
        >
          cyan
        </button>
        <button
          id="yellow"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          yellow
        </button>
        <button
          id="magenta"
          style={{ backgroundColor: "magenta" }}
          onClick={() => setColor("magenta")}
        >
          magenta
        </button>
        <button
          id="orange"
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          orange
        </button>
        <button
          id="purple"
          style={{ backgroundColor: "purple" }}
          onClick={() => setColor("purple")}
        >
          purple
        </button>

        <button
          id="pink"
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          pink
        </button>

        <button
          id="teal"
          style={{ backgroundColor: "teal" }}
          onClick={() => setColor("teal")}
        >
          teal
        </button>
      </div>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
