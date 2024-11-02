import './App.css';

import { useState } from "react";

function App() {
  let [text, setText] = useState(null);
  function change() {
    if (text == null) {
      text = "Welcome To React";
      setText(text);
    } else {
      text = null;
      setText(text);
    }
  }
  return (
    <div className="App ">
      <button id="btn" onClick={() => change()}>
        Show/Hide
      </button>
      <p id="para">{text}</p>
    </div>
  );
}

export default App;

