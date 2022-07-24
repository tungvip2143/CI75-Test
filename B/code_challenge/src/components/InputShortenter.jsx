import React, { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");
  const [id, setId] = useState("domain1");
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };
  const handleId = (id) => {
    if (id === "domain1") {
      localStorage.setItem("id", "domain1");
      setId("domain1");
    } else if (id === "domain2") {
      localStorage.setItem("id", "domain2");
      setId("domain2");
    }
    localStorage.setItem("id", "domain3");
  };
  return (
    <div className="inputContainer">
      <h1>Link Shortener</h1>
      <div className="file">
        <label> Enter a Link</label>

        <input
          type="text"
          placeholder="example.com"
          value={value}
          onChange={handleInput}
        />
        <button onClick={handleClick}>→</button>
        <label>
          <div className="radio-toolbar">
            Short domain:
            <button
              className={`domain ${id === "domain1" ? "checked" : ""}`}
              onClick={handleId("domain1")}
            >
              shrtco.de
            </button>
            <button
              className={`domain ${id === "domain2" ? "checked" : ""}`}
              onClick={handleId("domain2")}
            >
              9qr.de
            </button>
            <button
              className={`domain ${id === "domain3" ? "checked" : ""}`}
              onClick={() => setId("domain3")}
            >
              shiny.link
            </button>
          </div>
        </label>
      </div>
    </div>
  );
};

export default InputShortener;
