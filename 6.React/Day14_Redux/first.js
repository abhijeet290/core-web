import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./Stores";
import Counting from "./Counting";

// import { reactSlice } from "./Slice1";
import CustomCounter from "./CustomCounter";
function App() {
  //   console.log(reactSlice);
  return (
    <>
      <Provider store={stores}>
        <Counting /> <br />
        <br />
        <CustomCounter />
      </Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
