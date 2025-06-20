import { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function start() {
    if (!intervalRef.current)
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 1);
        //   console.log(time)
      }, 1000);
    setIsRunning(true);
  }
  function stop() {
    if (isRunning) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }
  function reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Stopwatch: {time} sec</h1>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={start}>
          Start
        </button>
        <button style={styles.button} onClick={stop}>
          Stop
        </button>
        <button style={styles.button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f4f8",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  buttons: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

// Optional: Hover effect
styles.button[":hover"] = {
  backgroundColor: "#0056b3",
};

ReactDOM.createRoot(document.getElementById("root")).render(<StopWatch />);
