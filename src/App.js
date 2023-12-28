// ---------------------- React Hooks ------------------


// import './App.css';
// import Home from './Home';

// function App() {
//   return (
//       <div>
//       <Home />
//     </div>
//   );
// }


// export default App;




// ---------------------- React Class Based Componnents ------------------

// import "./App.css";
// import React from "react";

// // function App() {
// //   return (
// //     <div className="App">
// //       App
// //     </div>
// //   )
// // }

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       // name: "Krishna",
//       // surname: "Das",

//       // count:0,

//       name: "",
//     };

//     this.increment = this.increment.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   increment() {
//     // this.state.count += 1;     ----> when you click on increment this will give error.
//     this.setState((prev) => {
//       return {
//         // count: prev + 1,
//         // count: 10,
//         count: prev.count + 1,
//       };
//     });
//   }

//   handleChange(e) {
//     this.setState({
//       name: e.target.value,
//     })
//   }

//   render() {
//     return (
//     <div className="App">
//       {/* {this.state.name} {this.state.surname} */}

//       {/* <p>
//         {this.state.count}
//       </p>
//       <button onClick={this.increment}>Increment</button> */}

//       <input 
//       type={"text"} 
//       placeholder="Enter Your Name" 
//       value={this.state.name}
//       onChange={this.handleChange}
//       />
//       <p>{this.state.name}</p>
//     </div>);   
//   }
// }

// export default App






import "./App.css";
import React from "react";
import Name from "./Name";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Krishna",
    };
  }
    render() {
      return (
      <div className="App">
        <p>{this.state.name}</p>
        <Name name="Gopal"/>
      </div>);   
    }
  }
  
  export default App;