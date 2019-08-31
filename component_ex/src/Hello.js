import React, {Component} from 'react';

const Hello = (props) => {
    return <p>Hello, my name is {props.name}</p>
}



/*
// 함수를 쓰는 방법 3가지
function Children1(){
    return <p>1: Hello World!</p>;
}

const Children2 = () => {
  return <p>2: Hello World!</p>;
}

const Children3 = () => <p>3: Hello, world!</p>;

const Hello = () => {
  return(
    <div>
      <Children1/>
      <Children2/>
      <Children3/>
    </div>
  );
}
*/
export default Hello