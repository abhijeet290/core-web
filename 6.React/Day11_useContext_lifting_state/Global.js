import { createContext } from "react";

const GlobalContext = createContext();

export default GlobalContext;

// first create context:
// import { createContext } from "react";

// const GlobalContext = createContext(); it can be empty

// to provide data to it we use a wrapper with value passed as object: <GLobalContext.Provider value={{object}}> child cpmponents which need these values </GLobalContext.Provider> like this

// <GlobalContext.Provider value={{ count, setCount }}>
//   <h1>Counter is: {count}</h1>
//   <Increment />
//   <Decrement />
// </GlobalContext.Provider>;

// to consume these values from globalcontext we use usecontext hook: const { count, setCount } = useContext(GlobalContext);
