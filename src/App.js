import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Movies component here
import Movies from './Components/Movies';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  render() {
    return (
      <div className="App">
        <Movies />
      </div>
    );
  }
}


// class App extends Component {
//   constructor(props) {    
//     super(props);
//     this.state = {  
//           show: false  
//     };
//   }
  
  // render() {  
  //     // use Todo component inside render method.    
  //     return (
  //       <div className="App">
  //         <Movies />
  //         </div>
  //         );
  //       }}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   constructor(props) {    
//     super(props);
//     this.state = {  
//           show: false  
//     };
//   }
//   return (
//     render() {  
//       // use Todo component inside render method.    
//       return (
//         <div className="App">
//           <Movies />
//           </div>
//           );
//         }
//     )
// }

export default App;
