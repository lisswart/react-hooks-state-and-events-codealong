import React, {useState} from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(true);
  function handleClick() {
    setIsOn((isOn) = !isOn);
  }

  const color = isOn ? "blue" : "crimson";

  return <button style={{background: color, color: "cornsilk"}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
