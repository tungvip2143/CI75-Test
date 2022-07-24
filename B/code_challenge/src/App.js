import { useState } from "react";
import "./App.css";
import InputShortener from "./components/InputShortenter";
import LinkResult from "./components/LinkResult";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <h1 className="top-heading">
        The <b>privacy-friendly</b> URL Shortener
      </h1>
      <InputShortener setInputValue={setInputValue} />

      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
