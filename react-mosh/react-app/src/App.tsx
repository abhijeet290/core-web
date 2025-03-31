import MyAlert from "./components/Alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup/ListGroup";

function App() {
  let cities = ["Delhi", "Patna", "Pune", "Mumbai", "Kolkata"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      {/* <MyAlert>
        Hello <span>World!</span>
      </MyAlert>
      <Button
        
        color="primary"
        onClick={() => console.log("clicked")}
      >MyButton</Button> */}
      <ListGroup cities={cities} heading="cities" onSelectItem={handleSelectItem}/>
    </>
  );
}

export default App;
