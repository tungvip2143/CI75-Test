import React, { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    setInputValue(value);
    setValue("");
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
            Short domain
            <input
              type="radio"
              id="domain1"
              name="domain"
              value="shrtco.de"
              checked
            />
            <label htmlFor="domain1">shrtco.de</label>
            <input type="radio" id="domain2" name="domain" value="9qr.de" />
            <label htmlFor="domain2">9qr.de</label>
            <input type="radio" id="domain3" name="domain" value="shiny.link" />
            <label htmlFor="domain3">shiny.link</label>
          </div>
        </label>
      </div>
    </div>
  );
};

export default InputShortener;
