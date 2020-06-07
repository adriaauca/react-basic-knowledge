import React from 'react';
import './App.css';

function HelloWorld(props) {
  return (
  <div id="hello">
    <h3>{props.subttitle}</h3>
    {props.mytext}
  </div>
  );
}

function App() {
  return (
    <div>
      This is my component:
      <HelloWorld mytext="Hello 1" subttitle="Answer 1:" />
      <HelloWorld mytext="Hello 2" subttitle="Answer 2:" />
      <HelloWorld mytext="Hello 3" subttitle="Answer 3:" />
    </div>
  );
}

export default App;
