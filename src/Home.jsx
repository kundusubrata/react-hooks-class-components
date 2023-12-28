// ---------------------- React Hooks ------------------



// import React, {useState,useEffect} from 'react';


// const Home = () => {
//     // let a = 0;
// const [a,setA] = useState(0);
// const increment = () => {
//     setA(a+1);
//     console.log(a);
// }
// const decrement = () => {       
//     setA(a-1);
//     console.log(a);
// }
// useEffect(() => {
//     console.log("Showing Effect")
// }, [a])

//   return (
//     <div>
//         <button onClick={increment}>ADD</button>
//         <p>{a}</p>
//         <button onClick={decrement}>Minus</button>
//     </div>

//   )
// }

// export default Home;






// import React,{useContext,useEffect,useRef} from 'react'
// import { Context } from './index';

// const Row = () => {
//     const data = useContext(Context);
//     const customElement = useRef(null);
//     // console.log(data);
//     // console.log(customElement);

//     useEffect(() => {
//       console.log(customElement.current)
//     }, [])
    
    
//     return (
//         <div ref = {customElement}>{data}</div>
//     )
// }

// const Home = () => {
//   return (
//     <div>
//         <Row />
//     </div>
//   )
// }

// export default Home;



// ---------------------- React Class Based Componnents ------------------