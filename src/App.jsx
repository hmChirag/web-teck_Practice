// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Product from "./Product.jsx";  
import "./Product.css"
function App() {
  // const [count, setCount] = useState(0)
  let styles={
    display:"flex",
    flexWrap:"wrap",
  };
  function printHello(){
    console.log("hello");
  };
  return (
    <div >
      <h1>Blockbuster Deals | Shop Now</h1>
      <div style={styles}>
      <Product title="logitrech mx master" idx={0}/>
      <Product title="apple pencil (2nd gen)" idx={1}/>
      <Product title="petronics toad 23" idx={2}/>
      <Product title="zebronics zeb-transformer" idx={3}/>
      </div>
      <button onClick={printHello}></button>
    </div>

    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
        // <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    //   </> 
    
  )
}

export default App;
