// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

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

// export default App;

import React, { Component } from 'react';
import Hello from './Hello';

class App extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            flag: false
        }
    }

    handleChange() {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        return (
        <div>
            <button onClick={this.handleChange}>Switch Flag</button>
            {`${this.state.flag}`}
            <Hello/>
        </div>
        )
    }
}
export default App