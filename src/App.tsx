import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={(e) => alert(12312)}>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          hello
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="http://www.baidu.com"
          target="_blank"
        >
          baidu link
        </Button>
      </header>
    </div>
  );
}

export default App;
