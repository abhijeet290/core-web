import MyAlert from "./components/Alert";
import Button from "./components/button";

function App() {
  let cities = ["Delhi", "Patna", "Pune", "Mumbai", "Kolkata"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <MyAlert>
        Hello <span>World!</span>
      </MyAlert>
      <Button
        
        color="primary"
        onClick={() => console.log("clicked")}
      >MyButton</Button>
    </>
  );
}

export default App;
