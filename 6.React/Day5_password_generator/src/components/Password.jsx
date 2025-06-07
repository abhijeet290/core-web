import React, { useCallback, useEffect, useState } from "react";
import "./PasswordGen.css";

const PasswordGen = () => {
  const [password, setPassword] = useState("acbd@1254");
  const [length, setLength] = useState(10);
  const [numberChanged, setNumberChanged] = useState(false);
  const [charChanged, setCharChanged] = useState(false);

  const genPassword = useCallback(() => {
    let passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberChanged) passwordString += "0123456789";
    if (charChanged) passwordString += "!@#$%^&*~`";

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * passwordString.length);
      password += passwordString[randomIndex];
    }

    setPassword(password);
  }, [length, numberChanged, charChanged]);

  useEffect(() => {
    genPassword();
  }, [genPassword]);

  const copyPassword = () => navigator.clipboard.writeText(password);

  //  function genPassword() {
  //   let passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let number = "0123456789";
  //   let character = "!@#$%^&*~`";

  //   if (numberChanged) passwordString += number;
  //   if (charChanged) passwordString += character;

  //   let password = "";
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * passwordString.length);
  //     password += passwordString[randomIndex];
  //   }
  //   setPassword(password);
  // }

  // useEffect(() => {
  //   genPassword();
  // }, [length, numberChanged, charChanged]);

  // useEffect(() => {
  //   let passwordString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   let number = "0123456789";
  //   let character = "!@#$%^&*~`";

  //   if (numberChanged) passwordString += number;
  //   if (charChanged) passwordString += character;

  //   let newPassword = "";
  //   for (let i = 0; i < length; i++) {
  //     const randomIndex = Math.floor(Math.random() * passwordString.length);
  //     newPassword += passwordString.charAt(randomIndex);
  //   }
  //   setPassword(newPassword);
  // }, [length, numberChanged, charChanged]);

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div id="pass">

      <h2>{password}</h2>
      <button onClick={copyPassword}>copy</button>
      </div>
      <div className="controls">
        <div className="range-container">
          <input
            type="range"
            min={5}
            max={50}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>

        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={numberChanged}
              onChange={() => setNumberChanged(!numberChanged)}
            />
            Number
          </label>
          <label>
            <input
              type="checkbox"
              checked={charChanged}
              onChange={() => setCharChanged(!charChanged)}
            />
            Character
          </label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGen;
