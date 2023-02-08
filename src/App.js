// import React from "react";
import Fruits from "./components/Fruits.js"
// JSX
const App = ()=>{
    // let Guys = "Hello"
    return(
        <div>
            <h1 style={{color: "red", backgroundColor: "blue"}}>Hello to React World</h1>
            <p className="para">Welcome Guys</p>
            <Fruits name="Apple" />
            <Fruits name="Banana"/>
            <Fruits name="Mango"/>
        </div>
    )
}

// export const HelloWorld1 = ()=>{
//     return(
//         <div>
//            <h1>Hello to React World 1</h1>
//            <p>Welcome Guys 1</p>
//         </div>
//     )
// }

export default App   //one component can be exported at a time



//JSX