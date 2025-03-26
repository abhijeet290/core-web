import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Delhi", "Patna", "Pune", "Mumbai", "Kolkata"];
  const handleSelectItem=(item:string)=>{
    console.log(item)
  }
  return (
    <>
      <ListGroup cities={cities} heading="Cities" onSelectItem={handleSelectItem} />
    </>
  );
}

export default App;
