import React, {Component} from 'react';
import './App.css';
import Hello from './Hello'

class App extends Component {
  
  render(){
    // 여기서 화면을 구현
    return(
      <div>
        <p>Component</p>
        <Hello name="Taro"></Hello>
      </div>
    );
    
   /*
   const num = 1;
   return <div>Number of {num}.</div>;
   */
  /*
  const b = true;
  let paragraph = <p>default</p>;
  if(b){
    paragraph = <p>true</p>
  }
  return paragraph;
  */
  }
}
export default App;
